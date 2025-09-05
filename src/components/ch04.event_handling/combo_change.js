function App(){
    const breadList = ["소금빵", "단팥빵", "샌드위치", "도너스", "소보루빵"];
    const drinkList = ["아메리카노", "카페라떼", "콜드브루", "바닐라라떼"];

    let result = '';
    
    const ComboChange = (event) => {
        
        
        const target_id = event.target.id;
        const target_value = event.target.value;
        
        console.log(`요소 아이디 : ${target_id}`);
        console.log(`선택된 콤보 상자 값 : ${target_value}`);
        
        if(target_value === "bread"){
            result += `<ul>`;

            for(const item of breadList){ // for(타입 단수:복수)
            result += `<li>${item}</li>`;
                }
            
            result += `</ul>`;
            
        }
        

    }
    
    return(
        <div className="App">
            <h2> 콤보체인지 과제 </h2>
            <br />
            <select id="menu_select" onChange={ComboChange}>
                <option value="-">항목을 선택해 주세요</option>
                <option value="bread">빵</option>
                <option value="drink">음료수</option>
            </select>
            <br />
            <div dangerouslySetInnerHTML={{__html : result}} /> 
        </div>
    );     
}

export default App ;