function App(){
    const ChangeEvent = (event) => {
        // const eventArray = [];
        // for(const evt in event){
        //     eventArray.push(evt);
        // }
        // console.log(eventArray);
        // console.log(`이벤트 유형 : ${Event.type}`);
        // console.log(`이벤트 발생요소 : ${Event.traget}`);
    
        // console.log(`event.taret 내에 속성 확인하기`);
        // for(const item in event.target){
        //     console(item);
        // }

        const target_id = event.target.id;
        const target_value = event.target.value;


        console.log(`요소 아이디 : ${target_id}`);
           
        if(target_id === "input_box") {
            console.log(`입력 상자 내용 : ${target_value}`);
        
        }else if (target_id === "menu_select"){
            console.log(`선택된 콤보 상자 값 : ${target_value}`);
            if(target_value === '-'){             
                document.getElementById('image01').src = '';
                alert('보여줄 이미지를 선택해 주셔야 합니다.');
            }else{
                const image_url = target_value;
                document.getElementById('image01').src = image_url;
                document.getElementById('image01').width = 200;
                document.getElementById('image01').height = 200;
            }
        
        }else{

        }
    }

    
    return(
        <div className="App">
            <h2> Change 이벤트 </h2>
            <input id="input_box" onChange={ChangeEvent}/>
            <br />
            <select id="menu_select" onChange={ChangeEvent}>
                <option value="-">항목을 선택해 주세요</option>
                <option value="americano01_bigsize.png">아메리카노</option>
                <option value="french_baguette_01_bigsize.png">프렌치 바게트</option>
                <option value="croissant_03_bigsize.png">크로아상</option>
                <option value="brioche_04_bigsize.png">브리오슈</option>
            </select>
            <br />
            {/* alt 속성은 해당 이미지가 없을 때 보여주는 글자를 지정하는 속성입니다. */}
            <br />

            <img id="image01" alt="NoImage"/>

        </div>
    );     
}

export default App ;