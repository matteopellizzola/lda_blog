import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useUser } from '../contexts/userContext';


function LoggedinPopOver({ userData }) {
    const {logoutCustomer} = useUser();
    const popover = (
        <Popover id="popover-user" className='popover'>
            <div className='popover-link-container'>
                <a className='btn-link btn' href={userData.editPath}>Add a product</a>
                <a className='btn-link btn' href={userData.mediaLibraryLink} target='_blank'>Image Library</a>
                <div className='btn-link btn' onClick={() => {
                    logoutCustomer()
                }}>Logout</div>
            </div>
        </Popover>
    );

    return <div className="menu-item">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <div className='cursor-pointer'>{userData.user.username}</div>
        </OverlayTrigger>
    </div>;
}

export default LoggedinPopOver;