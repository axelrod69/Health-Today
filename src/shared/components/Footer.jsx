import '../styles/footer.css'
import '../styles/navBar.css'
import MedicalIcon from '../../assets/icons/medical.svg?react'
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';
import { useRef } from 'react';

function Footer() {
    const { isMobile } = getScreenSize()
    const { t } = useLocalization()
    const studioDialog = useRef(null)

    const closeOnBackdrop = (event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close()
        }
    }

    return (
        <>
            <div className='footer'>
                <div className='footerBody'>
                    <div>
                        <div className='iconDiv'>
                            <MedicalIcon width={isMobile ? 40 : 60} height={isMobile ? 40 : 60} />
                            <div className='h2Div'>
                                <h2>{t("common.healthToday")}</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{t("footer.quickLinks")}</h2>
                        <p>{t("footer.ourServices")}</p>
                        <p>{t("footer.appointment")}</p>
                        <p>{t("common.aboutUs")}</p>
                    </div>
                    <div>
                        <h2>{t("footer.designedByAxelrodStudios")}</h2>
                        <button
                            type="button"
                            className="studioAboutButton"
                            aria-haspopup="dialog"
                            onClick={() => studioDialog.current.showModal()}
                        >
                            {t("common.moreAboutUs")}
                        </button>
                    </div>
                </div>
                <div className='footNote'>
                    <p>{t("footer.privacyPolicy")}</p>
                </div>
            </div>
            <dialog
                ref={studioDialog}
                className="studioDialog"
                aria-labelledby="studioDialogTitle"
                aria-describedby="studioDialogDescription"
                onClick={closeOnBackdrop}
            >
                <div className="studioDialogHeader">
                    <h2 id="studioDialogTitle">Axelrod Studios</h2>
                    <button
                        type="button"
                        className="studioDialogClose"
                        aria-label="Close Axelrod Studios popup"
                        onClick={() => studioDialog.current.close()}
                        autoFocus
                    >
                        ✕
                    </button>
                </div>
                <div id="studioDialogDescription">
                    <p>We help people take their business and ideas online.</p>
                    <p>
                        For websites and mobile applications, drop an E-mail on{' '}
                        <a href="mailto:axelrodstudios8@gmail.com">axelrodstudios8@gmail.com</a>
                        {' '}or leave a message on{' '}
                        <a href="sms:+919831405393">+919831405393</a>
                    </p>
                </div>
            </dialog>
        </>
    );
}

export default Footer
