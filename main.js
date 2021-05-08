

const App = {
    data() {
      return {
        levelOptions:[
            {
                period:"久居(超過三年)",
                level: 5   
            },
            {
                period:"短居(超過一年)",
                level: 4
            },
            {
                period:"旅居(超過三個月)",
                level: 3
            },
            {
                period:"旅遊(三個月以內)",
                level: 2   
            },
            {
                period:"路過",
                level: 1   
            },
            {
                period:"從沒去過",
                level: 0   
            },
        ], 
        coutryInfo:[
            {id:"Finland",lv:0}, {id:"Sweden",lv:0}, {id:"Norway",lv:0},
            {id:"UK",lv:0}, {id:"Ireland",lv:0}, {id:"Portugal",lv:0},
            {id:"Spain",lv:0},{id:"France",lv:0},{id:"Belgium",lv:0},
            {id:"Luxembourg",lv:0},{id:"Netherlands",lv:0},{id:"Denmark",lv:0},
            {id:"Germany",lv:0},{id:"Switzerland",lv:0},{id:"Italy",lv:0},
            {id:"Poland",lv:0},{id:"CzechRepublic",lv:0},{id:"Austria",lv:0},
            {id:"Slovenia",lv:0},{id:"Croatia" ,lv:0},{id:"Slovakia",lv:0},
            {id:"Hungary" ,lv:0},{id:"BosniaHerzegovina",lv:0},{id:"Montenegro",lv:0},
            {id:"Albania" ,lv:0},{id:"Greece",lv:0},{id:"Serbia" ,lv:0},
            {id:"Kosovo",lv:0},{id:"NorthMacedonia",lv:0},{id:"Estonia",lv:0},
            {id:"Latvia",lv:0},{id:"Lithuania" ,lv:0},{id:"Belarus",lv:0},
            {id:"Ukraine",lv:0},{id:"Moldova",lv:0},{id:"Bulgaria" ,lv:0},
            {id:"Romania",lv:0},{id:"Iceland" ,lv:0},
        ],
        tempCountryName:'',
        //tempCountryLevel:[],
        LvSum: 0 ,
        userName:'',
        
      }    
    
    
    },

    methods:{
        getCountry(e){
            let selected = document.querySelector('.menuOptions');
            let scrX = e.screenX;
            let scrY = e.screenY-220;
            selected.style.display = 'block';
            selected.style.top = scrY+'px';
            selected.style.left = scrX+'px';
            this.tempCountryName = e.target.id
        },
        checkCountryLevel(lv){
            let selected = document.querySelector('.menuOptions');
            let summary = 0;
            let id = '';
            let lvNum = 0;
            selected.style.display = 'none';
            //this.tempCountryLevel.push(lv);
            for(let i=0 ; i<this.coutryInfo.length ;i++){
                if(this.tempCountryName === this.coutryInfo[i].id){
                    this.coutryInfo[i].lv = lv;
                    id = this.coutryInfo[i].id;
                    lvNum = this.coutryInfo[i].lv;
                }
                summary = summary + this.coutryInfo[i].lv ; 
            }
            this.LvSum = summary ;
            this.fillCountryColor(id,lvNum);
        },
        fillCountryColor(id,num){
            if(id === "UK"){
                let change = document.querySelector("#"+id);
                change.setAttribute('class','level'+num);
                let change2 = document.querySelector("#UK2");
                change2.setAttribute('class','level'+num);
            }
            else{
                let change = document.querySelector("#"+id);
                change.setAttribute('class','level'+num);
            }
        },
        playAgain(){
            for(let i=0 ; i<this.coutryInfo.length ;i++){
                this.coutryInfo[i].lv = 0;
                let change = document.querySelector("#"+this.coutryInfo[i].id);
                change.setAttribute('class','level0');
                if(this.coutryInfo[i].id === "UK"){
                    let change = document.querySelector("#"+this.coutryInfo[i].id);
                    change.setAttribute('class','level0');
                    let change2 = document.querySelector("#UK2");
                    change2.setAttribute('class','level0');
                }
            }
            this.LvSum = 0;
            this.userName ='';
        },
        writeName(){
            let name = document.querySelector('.typeNameBox');
            console.log(name.value);
            if(name.value === ''){
                alert('請輸入你的名字');
            }else{
                this.userName = name.value;
                name.value = '';
            }
        },
        screenShot() {
            const preview = document.querySelector('#newApp');
            html2canvas(preview).then((canvas) => 
            {
                var img = document.createElement('a');
                img.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                img.download = `EU-CountryLevel.jpg`;
                img.click();
            })  
        },
        
    }
  }
  
  Vue.createApp(App).mount('#newApp')
  
  
