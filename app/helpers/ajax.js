export function ajax(props){
 let {url,cbSucess,cbError}=props;

 fetch(url)
 .then(res=>res.ok?res.json():Promise.reject(res))
 .then( json => cbSucess(json))
 .catch(err=>{
     document.getElementById('root').innerHTML =`
     <div class="error" >
     <p> Error ${err.status}:${err.statusText}</p>
     </div>
     `
     console.log(err)
     cbError();
 })
}