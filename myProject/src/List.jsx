function List(props){
    const items=props.items;
    const listitems=items.map(item=><li key={item.id}>{item.name} has cal:{item.cal}</li>);
    return (<><h2>{props.category}</h2><ol>{listitems}</ol></>);
}
export default List