import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CircleFlag } from 'react-circle-flags';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'us',
  },
  {
    code: 'pt',
    name: 'Português',
    country_code: 'br',
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es',
  },
];

function MyVerticallyCenteredModal(props) {
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'en';
  // const currentLanguage = languages.find(
  //   (lang) => lang.code === currentLanguageCode
  // );

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t('language')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="languageButtons">
          {languages.map((language) => (
            <Button
              key={language.code}
              onClick={() => {
                i18next.changeLanguage(language.code);
                props.onHide();
              }}
              disabled={language.code === currentLanguageCode}
            >
              <CircleFlag countryCode={language.country_code} height="55" />
              {language.name}
            </Button>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export const Language = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="language" onClick={() => setModalShow(true)}>
        <AiOutlineGlobal size={36} />
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Language;
