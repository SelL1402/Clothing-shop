import './PersonalAccount.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
                        <form className="personal-account-page-content-tab-wrapper-form" action="">
                            <div className="personal-account-page-content-tab-wrapper-personal-data">
                                <div className="personal-account-page-content-tab-wrapper-personal-data-col">
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">E-mail</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="email" />
                                    </div>
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">Name</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="text" />
                                    </div>
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">Date birthday</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="date" />
                                    </div>
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">Number</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="number" />
                                    </div>
                                </div>
                                <div className="personal-account-page-content-tab-wrapper-personal-data-col">
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">Surname</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="text" />
                                    </div>
                                    <div className="personal-account-page-content-tab-wrapper-personal-data-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">Sex</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="personal-account-page-content-tab-wrapper-password">
                                <div className="personal-account-page-content-tab-wrapper-password-title">Password</div>
                                <div className="personal-account-page-content-tab-wrapper-password-col">
                                    <div className="personal-account-page-content-tab-wrapper-password-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">New password</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="password" />
                                    </div>
                                    <div className="personal-account-page-content-tab-wrapper-password-col-row">
                                        <label className="personal-account-page-content-tab-wrapper-personal-data-col-row-label" htmlFor="">Confirm the new password</label>
                                        <input className="personal-account-page-content-tab-wrapper-personal-data-col-row-input" type="password" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button className="personal-account-page-content-tab-wrapper-form-button">Confirm</button>
                    </Tab>
                    <Tab eventKey="orders" className="tab border" title={<span className="personal-account-page-content-tab-wrapper-title">My orders</span>}>
                        Tab content for Profile
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