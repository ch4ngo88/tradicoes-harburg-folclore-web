
const Impressum = () => {
  return (
    <div className="flex flex-col items-center px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-seagreen mb-6">Impressum</h2>
      
      <div className="prose max-w-prose">
        <h3 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h3>
        <p>
          Centro Português Harburg e.V.<br />
          Reetwerder 23<br />
          21029 Hamburg
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Vertreten durch</h3>
        <p>
          Vorstand des Centro Português Harburg e.V.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Kontakt</h3>
        <p>
          E-Mail: info@tradicoesportuguesas.com
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Centro Português Harburg e.V.<br />
          Reetwerder 23<br />
          21029 Hamburg
        </p>
      </div>
    </div>
  );
};

export default Impressum;
