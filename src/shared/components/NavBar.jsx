import '../styles/navBar.css'
import MedicalIcon from '../../assets/icons/medical.svg?react'
import DropDownIcon from '../../assets/icons/dropdown-icon.svg?react'
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider'


function NavBar() {

    const { isMobile, isTablet, isLaptop } = getScreenSize()
    const { t, setLocale } = useLocalization()

    return (
        <>
            <div className="navBar">
                <div className='iconDiv'>
                    <MedicalIcon width={60} height={60} />
                    <div className='h2Div'>
                        <h2>{t("common.healthToday")}</h2>
                    </div>
                </div>
                <ul>
                    <li>{t("navBar.home")}</li>
                    <li>{t("navBar.about")}</li>
                    <li>{t("navBar.services")}</li>
                    <li>{t("navBar.appointment")}</li>
                </ul>
                <div className='languageDropdown'>
                    {t("navBar.changeLanguage")}
                    <DropDownIcon width={30} height={30} />
                    <div className='dropDownContent'>
                        <ul>
                            <li onClick={() => {
                                setLocale("en")
                            }}>{t("navBar.english")}</li>
                            <li onClick={() => setLocale("hi")}>{t("navBar.hindi")}</li>
                            <li onClick={() => setLocale("bn")}>{t("navBar.bengali")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar