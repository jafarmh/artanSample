import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/content");
  const data = await res.json();

  // const resPost = await fetch("http://localhost:3000/api/content", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ 
  //     title:"add with post",
  //     content:"for test"
  //    }),
  // });
  // const dataPost = await resPost.json();

  // console.log(dataPost,'============data')

  // const resPUT = await fetch("http://localhost:3000/api/content", {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ 
  //     id:2,
  //     title:"update with PUT",
  //     content:"for test edit"
  //    }),
  // });
  // const dataPUT = await resPUT.json();

  // console.log(dataPUT,'============dataPUT')


  
  // const resDelete = await fetch("http://localhost:3000/api/content", {
  //   method: "Delete",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ 
  //     id:3,
      
  //    }),
  // });
  // const dataDelete = await resDelete.json();

  // console.log(dataDelete,'============dataDelete')
  return (
    < >
    
    </>
  );
}
