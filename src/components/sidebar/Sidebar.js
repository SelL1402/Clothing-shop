import './Sidebar.scss'

import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import store from '../../store';

import { filtersChanged, fetchFilters, selectAll } from './SidebarSlice';

const Sidebar = () => {

    const {filtersLoadingStatus} = useSelector(state => state.filters);
    const filters = selectAll(store.getState());
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchFilters(request));

        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === "error") {
        return <h5 >Download error</h5>
    }

    const renderFilters = (arr) => {
        if(arr.length === 0){
            return <h5 >Filters was not found</h5>
        }

        return arr.map(({name, label}) => {
            
            return <li key={name} className="asidebar-nav-list-item">
                        <button
                            id={name}
                            className="asidebar-nav-list-item-btn"
                            onClick={()=> dispatch(filtersChanged(name))}
                            >{label}</button>
                   </li>
        })
    }

    const elements = renderFilters(filters);

    return(
        <aside>
            <nav className='asidebar-nav'>
                <ul className="asidebar-nav-list">
                    {elements}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;