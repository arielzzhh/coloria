
export function BRgb({bulb}) {
    return (

        <>
        {console.log(bulb)}

  <h2>Rgb Genes</h2>
<div style={{display:'flex',justifyContent:'space-evenly',height:'10%',width:'100%',fontSize:'1.8em',fontWeight:'1000' }}>
    <div  style={{ backgroundColor:'red',width:'75%'}}>{bulb.rgbGene[0]}</div>
    <div  style={{backgroundColor:'green',width:'75%'}}>{bulb.rgbGene[1]}</div>
    <div  style={{backgroundColor:'blue',width:'75%'}}>{bulb.rgbGene[2]}</div>
</div>
<h2>Born  Genes</h2>
<div style={{display:'flex',justifyContent:'space-evenly',height:'10%',width:'100%'}}>
    <div  style={{backgroundColor:'red',width:'75%'}}>   {bulb.genes[0]}</div>
    <div  style={{backgroundColor:'green',width:'75%'}}>{bulb.genes[1]}</div>
    <div  style={{backgroundColor:'blue',width:'75%'}}>{bulb.genes[2]}</div>
    <div  style={{backgroundColor:'green',width:'75%'}}>{bulb.genes[3]}</div>
    <div  style={{backgroundColor:'blue',width:'75%'}}>{bulb.genes[4]}</div>
</div>


        </>
    );
}

export default BRgb;