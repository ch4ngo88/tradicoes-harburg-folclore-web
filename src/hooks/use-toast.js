import * as React from "react";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t),
            };
        case "DISMISS_TOAST": {
            const { toastId } = action;
            if (toastId) {
                addToRemoveQueue(toastId);
            }
            else {
                state.toasts.forEach((toast) => addToRemoveQueue(toast.id));
            }
            return {
                ...state,
                toasts: state.toasts.map((t) => toastId === undefined || t.id === toastId ? { ...t, open: false } : t),
            };
        }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return { ...state, toasts: [] };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== action.toastId),
            };
    }
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
let memoryState = { toasts: [] };
const listeners = [];
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => listener(memoryState));
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId) => {
    if (toastTimeouts.has(toastId))
        return;
    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({ type: "REMOVE_TOAST", toastId });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
function toast(props) {
    const id = genId();
    const update = (props) => dispatch({
        type: "UPDATE_TOAST",
        toast: { ...props, id },
    });
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open) => {
                if (!open)
                    dismiss();
            },
        },
    });
    return { id, dismiss, update };
}
function useToast() {
    const [state, setState] = React.useState(memoryState);
    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []); // ✅ korrekt: nur einmal subscriben
    return {
        ...state,
        toast,
        dismiss: (toastId) => toastId !== undefined
            ? dispatch({ type: "DISMISS_TOAST", toastId })
            : dispatch({ type: "DISMISS_TOAST" }),
    };
}
export { useToast, toast };
