import {useGetCurrentQuery} from "../../api/apiSlice"
import { useMemo } from "react";
import './main.scss'
import CardItem from '../cardItem/CardItem';
import { useSelector } from "react-redux";
const Main = () => {
    
    const {
        data: current = [],
        isError
    } = useGetCurrentQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter);

    const filteredGoods = useMemo(() => {
        const filteredGoods = current.slice();

        if(activeFilter === 'all') {
            return filteredGoods;
        } else {
            return filteredGoods.filter(item => item.type === activeFilter);
        }
    }, [current, activeFilter]);

    if(isError){
        return <h5>Ошибка загрузки</h5>
    }

    const renderMainList = (arr) =>{
        return arr.map(({id, ...props}) =>{
            return(
                <CardItem key={id} {...props} />
            );
        });
    };

    const elements = renderMainList(filteredGoods)

    return(
        <main>
            {elements}
        </main>
    )
}

export default Main;