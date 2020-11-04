import React from 'react';

import '../assets/styles/components/Resumen.scss';

class Resumen extends React.Component {
  componentDidMount() {
    if (typeof window.orientation !== 'undefined') {
      document.getElementById('linkDownloadPDF').click();
      window.close();
    }
  }

  render() {
    return (
      <div className='resumen__container'>
        <object
          data={require('../assets/statics/docs/cv_valero_rev2.1.pdf')}
          type='application/pdf'
          width='100%'
          height='100%'
          className='pt-5'
          aria-label=''
        >
          <a
            href={require('../assets/statics/docs/cv_valero_rev2.1.pdf')}
            id='linkDownloadPDF'
            download='cv_jose_valero.pdf'
          >
            <h1>
              Tu dispositvo no puede Visualizar el Documento, dale <b>click </b>
              para descargarlo
            </h1>
          </a>
        </object>
      </div>
    );
  }
}

export default Resumen;
