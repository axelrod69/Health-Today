import '../styles/nameCard.css'
import Shape from './Shape';
import '../styles/shape.css'
import { BsTelephone } from 'react-icons/bs';
import getScreenSize from '../hooks/useScreenSize'
import { useLocalization } from '../../core/localization/LocalizationProvider';

function NameCard({ name, phoneNumber, style, image }) {
    const { isMobile, isTablet } = getScreenSize()
    const { t } = useLocalization()

    return (
        <>
            <div className='nameCard' style={style}>
                {!isMobile && <Shape style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '6px solid var(--color-brand)',
                    // height: '100%',
                    width: isMobile ? '12vw' : isTablet ? '10vw' : '90px',
                    ...(image && {
                        aspectRatio: '1',
                        alignSelf: 'center',
                        flexShrink: 0,
                        overflow: 'hidden'
                    }),
                    margin: isMobile ? '1vw' : isTablet ? '1vw' : '8px'
                }}>
                    {image && <img className="nameCardPortrait" src={image} alt={name} />}
                </Shape>}
                <div className='nameCardSecond'>
                    <h4>{name}</h4>
                    {phoneNumber == null ? <p>{t("common.physician")}</p> : <div className='phoneNumber'>
                        <BsTelephone />
                        <p>{phoneNumber}</p>
                    </div>}
                </div>
            </div>
        </>
    );
}

export default NameCard
