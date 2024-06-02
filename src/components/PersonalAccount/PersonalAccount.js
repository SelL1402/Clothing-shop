import './PersonalAccount.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormRegistration from '../form/form'


const PersonalAccount = () => {


    return(
        <div className="personal-account-page">
            <div className="personal-account-page-content">
                <Tabs
                defaultActiveKey="account"
                id="uncontrolled-tab-example"
                className="personal-account-page-content-tab-wrapper border-0"
                fill
                >
                    <Tab eventKey="account" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">My account</span>}>
                        <FormRegistration/>
                    </Tab>
                    <Tab eventKey="orders" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">My orders</span>}>
                        Orders
                    </Tab>
                    <Tab eventKey="support" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">Support</span>}>
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default PersonalAccount;