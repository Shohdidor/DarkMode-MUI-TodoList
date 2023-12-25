import * as React from 'react';
import Box from '@mui/material/Box';

import './App.css'
import Switcher from './components/Switcher'
import Button from '@mui/material/Button';
import Card from './components/Card';
import Phone from "/img/вар1.svg"
import { Card2 } from './components/Card';
import { Card3 } from './components/Card';
import { Card4 } from './components/Card';
import { Card5 } from './components/Card';

import Uno from "/img/Group 56 (1).png"
import Dos from "/img/Group 57 (2).png"
import Tres from "/img/Group 58 (2).png"
import Ph18 from "/img/Frame (18).png"
import Ph16 from "/img/Group 16.png"


import Photo1 from "/img/Rectangle 13.png"
import Photo2 from "/img/Rectangle 14 (1).png"
import Photo3 from "/img/Rectangle 15 (1).png"

import Video from "/img/video.png"
import { useState } from 'react';

import Modal from '@mui/material/Modal';




const App = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    pb: 3,
    px: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const [ idxEd , setidxEd ] = useState ("")
  const [ textEdit , setTextEdit ] = useState ("")
  
  const handleOpen = () => {
    setOpen(true);
    setidxEd ( elem )
  };
  const handleClose = () => {
    setOpen(false);
  };

  function editUser () {
    setData(data.map (( elem ) => {
      if ( elem . id == idxEd ) {
        elem.name = textEdit 
        return elem
      }
      else {
        return elem 
      }
    }))
    setTextEdit ("")
    handleClose()
  }


  const [ data , setData ] = useState ( [ { id : 1 , name : "Peter Parker", isCompleted : false  }, { id : 2 , name : "Gwen Stacy", isCompleted : false  }, { id : 3 , name : "Tailer Dyrton", isCompleted : false  }, { id : 4 , name : "Walter White", isCompleted : false  } , { id : 5 , name : "Jessy Pinkman", isCompleted : false  } , { id : 6 , name : "Sold Man", isCompleted : false  }] )

  const [ inp , setInp ] = useState ("")
  function addUser () {
    let user = {
      id : new Date().getTime(),
      name : inp,
      isCompleted : false
    }
    data.push(user)
    setInp ("")
  }

  function deleteUser ( id ) {
    let deletee = data.filter (( elem ) => {
        return elem.id != id 
      })
      setData ( deletee )
  }

  function isComUser ( id ){
    let newComp = data.map (( elem ) => {
      if ( elem.id == id ){
        elem.isCompleted = !elem.isCompleted
      }
      return elem 
    })
    setData ( newComp )
  }

  return (

    <>
    <div className='overflow-hidden'>

    <div className='Back'>
    
    <div className='dark:bg-black text-black dark:text-white h-[1000vh]'>
      <Switcher />
      
      <div className='dark:bg-[white]'>

        <div className='flex sm:flex  sm:justify-around dark:bg-black'>
        <h1 className='text-[30px] mb-[10px] ml-[15px] font-bold text-white sm:text-white sm:font-black sm:text-[30px] dark:text-purple-600'>
          Inno Lingvo 
        </h1>

        <ul className='hidden sm:flex sm:text-white sm:justify-between sm:w-[500px] sm:font-bold sm:items-center dark:text-orange-600'>
          <li>О нас</li>
          <li>Преимущества </li>
          <li>Работа сервиса</li>
          <li>Вступить в White list</li>
        </ul>
        <div className='flex justify-between w-[180px] ml-[20px] mt-[15px] sm:w-[270px] sm:justify-between sm:mt-[8px]'>

      <Button variant="outlined" size='small' sx={{paddingInline:"25px", height:"4vh", color:"white", border: "1px solid white",}}>Логин</Button>
        <Button variant="contained" size='small' className='dark:bg-purple-600' sx={{paddingInline:"25px", height:"4vh", backgroundColor:"white", color:"black"}}>Регистрация</Button>
        </div>
      
        </div>
        
        </div>
        <Card h1={"Первый в мире сервис для постановки и улучшения русской речи для детей"} p={"Вступите в white-лист и получите 4 бесплатныхзанятия в числе первых пользователей бесплатно"} btn={"Вступить"} p2={"Количество мест ограничено!"} img={Phone}/>
      </div>
      </div>

      <Card2 h1={"Всего 3 минуты, чтобы начать улучшать речь"} img1={Uno} img2={Dos} img3={Tres} p1={"Скачайте приложение в App Store или Google Play. Зарегистрируйтесь, чтобы отслеживать прогресс ребёнка"} p2={"Загрузите голосовой сэмпл ребёнка (и его проблемной речи)"} p3={"Программа подберет уникальные упражнения, направленные на исправление речи ребёнка, а также порекомендует расписание для ежедневных занятий"} image={Ph18} />
      

      <Card3 h1={"Как это работает?"} p={"До банального просто! Inno Lingvo - это маркетплейс, соединяющий логопедов и детей с проблемной речью со всеми возможными вариантами трудностей речи: алалия, дислалия, ОНР, дизартрия, ринолалия, брадилалия, тахилалия, спотыкание, заикание, дислексия и другие"} image={Ph16} img1={""}/>

      <div className='bg-[#E9EBF7] pb-[80px] dark:bg-slate-900'>
        <br />
        <h1 className='font-black text-[25px] mt-[50px] text-center sm:ml-[50px] dark:text-orange-600'>
        Модули для детей
        </h1>

        <Card4 img1={Photo1} p1={"Формируем правильную речь"} img2={Photo2} p2={"Коррекция речи"} img3={Photo3} p3={"Открытие потенциала Вашего ребенка"}/>
      </div>

      <div className='Sky w-[350px] m-auto sm:w-[1050px] sm:h-[57vh]'>
      <Card5 h1={"Вступите в white-лист, и вы получите 4 бесплатных занятия в числе первых пользователей бесплатно!"} btn={"Записаться"}  p2={"Количество мест ограничено!"}/>
      </div>

      <div className='sm:flex sm:pl-[230px]'>
        <h1 className='font-black text-[22px] text-center sm:text-[40px] dark:text-green-600'>
        Немного наглядности
        </h1>
        <p className='text-gray-700 text-center mt-[10px] dark:text-orange-600 font-medium w-[300px]sm:text-[18px] sm:text-left sm:w-[400px] sm:ml-[220px]'>Посмотрите 3-минутное видео, чтобы лучше понять как это работает</p>
      </div>

      <img src={Video} alt="error" className='sm:ml-[345px] sm:mt-[50px]' />

      <input type="text" className='bg-slate-800 border-none text-white p-[2px] ml-[40px] rounded-[4px] sm:ml-[600px] sm:mb-[20px]  sm:p-[4px] dark:bg-orange-500 dark:text-black dark:font-bold' value={inp} onChange={(event) => setInp (event.target.value)}/>
      <Button variant="outlined" size='small' onClick={addUser} sx={{marginLeft:"30px", paddingInline:"25px", height:"4vh", color:"green", border: "1px solid green",}}> + Add </Button>
     

      <table className='bg-[#E9EBF7] text-center m-auto mt-[10px] dark:bg-slate-800'>
        <thead>
          <tr>
            <th className='dark:text-white'>
              Name 
            </th>
            <th className='dark:text-white'>
              Status
            </th>
            <th>

            </th>
          </tr>
        </thead>
        <tbody>
        { data.map (( elem )=> {
          return ( 
            <tr key={elem.id} className='border-t-[1px] border-gray-500 dark:border-white dark:text-orange-500'> 
            <td className='w-[200px] sm:w-[300px]'> <h1 className={elem.isCompleted?"dark:text-sky-500 text-red-700 font-bold": "text-black dark:text-orange-500 font-bold"}>  {elem.name}    </h1> </td>
            <td className='w-[100px] sm:w-[200px]'> {elem.isCompleted} false </td>
            <td className='w-[250px] pb-[7px] pt-[5px] sm:w-[280px]'>  <Button variant="outlined" size='small' onClick={()=> deleteUser (elem.id) } sx={{paddingInline:"25px", height:"4vh", color:"red", border: "1px solid red",}}> Delete </Button> 
            <input type="checkbox" checked={elem.isCompleted} onChange={ ()=> isComUser (elem.id)} />
            <Button onClick={()=> {setidxEd ( elem.id ) 
            setTextEdit ( elem.name )
                handleOpen ( elem )}} sx={{border:"1px solid green", color:"green"}}>Edit</Button>
   
            </td>
            </tr>
          )
        })}
        
      </tbody>
      </table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, borderRadius:"5px"}} className="dark:bg-orange-600">
          <h2 id="child-modal-title" className='font-black text-orange-500 mb-[15px] dark:text-white'>Did 
          <span className='dark:text-black'> you </span>  want <span className=' dark:text-black'>
            a </span>  change  <span className=' dark:text-black'>
              it </span>?</h2>
         <input type="text" className='border-[1px] border-none rounded-[5px] font-mono dark:text-gray-900 p-[5px] dark:bg-white  bg-black text-orange-500' value={textEdit} onChange={(event) => setTextEdit ( event.target.value ) }/>

          <Button sx={{marginLeft: "140px", color:"black", border: "1px dashed black"}} onClick={()=>editUser ()}> Change it </Button>
        </Box>
      </Modal>

      <div className='p-[50px] mt-[20px] bg-slate-900'>
        <h1 className='font-black text-center text-[20px] text-orange-500 dark:text-white sm:text-[50px]'> 
          <span className='text-white dark:text-orange-500'>T</span>h<span className='text-white dark:text-orange-500'>e</span> E<span className='text-white dark:text-orange-500'>n</span>d
        </h1>
      </div>

      </div>
    </>
  )
}

export default App
