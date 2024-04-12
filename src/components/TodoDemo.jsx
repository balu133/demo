export default function TodoList({todoitems}){
    function itemRemove(items){
       const leftitem=items.filter((value)=>{
         return value!==items
       });
       setValue(leftitem);
    }
    return (
        <>
          {todoitems.map((item)=>{
            return <>
                   {item}
                   <button onClick={()=>itemRemove(item)}>X</button><br />
                  </>
                    })}
        </>
    );
}