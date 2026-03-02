tulis : https://docs.zettlr.com/en/scientific-technical/code-blocks/
[link untuk dokumentasi zettlr](https://docs.zettlr.com/en/scientific-technical/code-blocks/)

---
> untuk mengecheck termasuk breakpointnya maka perlu dilakukan spliting tetapi untuk keamanan maka lakukan normalisasi lalu iterasi dan cocokkan dengan regex jika(!/\@\w\:[\S]+/g.test(val)) continue or return 
untuk mencegah breakpointnya masuk dan diolah oleh translator
 ## perdebatan 
 > - dinclass untuk breakpointnya maka lakukan hal yang sama persis kenapa tidak menggunakkan fungsi yang sama untuk mencapai hal itu 
 > > - itu bukan 1 class 1 tanggung jawab lebih baik menggunakkan 1 class 1 tanggung jawab
```javascript
 const class_names="@lg:color-red-90 color-red-50 @sm:color-blue-dark"
class_names.split(/\s+/g).forEach(val=>{
    if(!/\@(?:sm|lg|xs)/g.test(val))return
    console.log("nice try dude ",val)
})

```
---

> fungsi register_style untuk me register style jika sisip merupakkan fungsi maka operasi str.replace sedang dijalankan jika bukan(null atau bukan fungsi) maka operasi penambahan style sedang di eksekusi
```javascript
  /**
   * @desc to register it to style tag html and u can apply the style
   * @param {object} obj 
   * @param {string} obj.result to catch properties of css css 
   * @param {function} obj.sisip to perform custom value insertion to our style tag 
   */
  static register_style = ({result,style_id=new ImportantData().attr_html_tag,sisip=null }) => {
    const raw_style_tag=Utils.$("#"+style_id)
    let style_tag=raw_style_tag.textContent 
          if(!raw_style_tag)return
    // saya ingin jika sisip itu fungsi maka oke tapi jika null maka oke jangan kirim error warning
    if(typeof sisip === "function" || sisip === null){
      //jika sisip null maka tambahkan stylenya jika fungsi maka ganti kontentnya | berarti operasi str.replace(/\s\S/g,some_value) sedang dijalankan
      sisip===null?raw_style_tag.textContent+=result:raw_style_tag.textContent=sisip({value:raw_style_tag.textContent,style_tag:raw_style_tag.textContent})
    }else{
      throw new Error("sisip argument must be either function or null")
    }
    // Utils.$("#debuger").className+=className
  }

```

```
** kalau ada for iteration non higher order function maka gunakkan continue keyword **


 ```javascript
   const validate_regex_dinval1=/([\w]+)-\*\s*([^*]+)\s*\*/g
        let dinamicVal = g2.split(/\s+/g)//.matchAll(validate_regex_dinval1)]
    for (const result of dinamicVal) {
        // console.log("result all dynamic val ",result[0])
        // ?check for 2 dinamic | insert dinamicval
           // console.log("before regexed ",result)
          if(!/^\w+-\*\s*[^*]+\s*\*$/g.test(result))continue
         // console.log("result ",result)
          const resultat = [...result.matchAll(validate_regex_dinval1)][0]
        if(resultat.length === 0) continue
            console.log(resultat)
       //return
       }

```


