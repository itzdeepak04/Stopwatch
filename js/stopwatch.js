let milisecond=document.querySelector(".milisecond")
        let second=document.querySelector(".second")
        let minute=document.querySelector(".minute")
        let start=document.querySelector(".start")
        let stop=document.querySelector(".stop")
        let reset=document.querySelector(".reset")
        let lap=document.querySelector(".lap")
        let lapcountlist=document.querySelector(".lapcountContainer")
        let laptimerlist=document.querySelector(".laptimerContainer")
        let milicount=0;
        let seccount=0;
        let mincount=0;
        let lapcount=0;
        let interval=null;

        start.addEventListener("click",()=>{
            if(interval ==null)
        {   
           interval=setInterval(()=>{
            //second count
            if(seccount==60)
            {
                seccount=0;
                minute.innerText= (mincount<9)? `0${++mincount}`: ++mincount;
            }
            //milisecond count
            if(milicount==100)
            {
                milicount=0;
                 second.innerText= (seccount<9)? `0${++seccount}`: ++seccount;
            }
             milisecond.innerText= (milicount<9)? `0${milicount++}`: milicount++;
           },10)
           start.style.display="none";
            stop.style.display="inline-block";
        }
        })
        function neutral()
        {
            start.style.display="inline-block";
             stop.style.display="none";
            clearInterval(interval);
            interval=null;
        }
        stop.addEventListener("click",()=>{
            neutral();
        })
        reset.addEventListener("click",()=>{
             neutral();
             milicount=0;
             seccount=0;
             mincount=0;
             lapcount=0;
              milisecond.innerText="00";
              second.innerText="00";
              minute.innerText="00";
              lapcountlist.innerText="";
              laptimerlist.innerText="";
        })
        lap.addEventListener("click",()=>{
            if(milicount==0)
            {
                alert("First Start the stop watch")
            }
            else
            {
            let lapentry=document.createElement("div");
            lapentry.innerText=`Lap ${++lapcount}`;
            lapentry.classList.add("lapentry")
            lapcountlist.appendChild(lapentry);

            let laptimerentry=document.createElement("div");
            laptimerentry.innerText=`${minute.innerText}:${second.innerText}:${milisecond.innerText}`;
            laptimerentry.classList.add("laptimerentry")
            laptimerlist.appendChild(laptimerentry);
            }
        })