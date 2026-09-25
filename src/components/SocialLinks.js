import { socialLinks } from "../data"

const SocialLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass}>
            {socialLinks.map((social) => {
                return (
                    <li key={social.id}>
                        <a href={social.href} target="_blank" rel="noreferrer" className={itemClass}>
                            <i className={social.icon}></i>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SocialLinks
