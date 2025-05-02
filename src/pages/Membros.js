import { jsx as _jsx } from "react/jsx-runtime";
import { useMetaSEO } from "@/hooks/useMetaSEO";
import MembrosPage from "./member";
const Membros = () => {
    useMetaSEO("membros");
    return _jsx(MembrosPage, {});
};
export default Membros;
