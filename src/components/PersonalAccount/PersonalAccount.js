import './PersonalAccount.scss';

const PersonalAccount = () => {
    return(
        <div className="personal-account-page">
            <div className="personal-account-page-content">
                <div className="personal-account-page-content-filters">
                    <h1 className="personal-account-page-content-filters">Info about me</h1>
                    <ul className="personal-account-page-content-filters-list">
                        <li className="personal-account-page-content-filters-list-item">
                            My account
                        </li>
                        <li className="personal-account-page-content-filters-list-item">
                            My orders
                        </li>
                    </ul>
                </div>
                <div className="personal-account-page-content-main">
                    <form className='personal-account-page-content-main-form' action="">
                        <div className="personal-account-page-content-main-form-inputRow">
                            <input className="personal-account-page-content-main-form-inputRow-input" type="text" placeholder='Mail'/>
                            <input className="personal-account-page-content-main-form-inputRow-input" type="text" placeholder='Number phone'/>
                            <input className="personal-account-page-content-main-form-inputRow-input" type="text" placeholder='Name'/>
                        </div>
                        <div className="personal-account-page-content-main-form-inputRow">
                            <input className="personal-account-page-content-main-form-inputRow-input" type="text" placeholder='Last name'/>
                            <input className="personal-account-page-content-main-form-inputRow-input" type="text" placeholder='Date birthday'/>
                            <input className="personal-account-page-content-main-form-inputRow-input" type="text" placeholder='Sex'/>
                        </div>
                        <button className="personal-account-page-content-main-form-button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonalAccount;