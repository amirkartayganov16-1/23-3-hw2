import { useLocation } from "react-router-dom"

const ProfilePage = () => {
    const loc = useLocation()
    console.log(loc);
    return (
        <div>ProfilePage

            Welcome {loc.state}
        </div>
    )
}
export default ProfilePage