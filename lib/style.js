/**
     * @desc class that containt converter translation algoritm
    */   
    class CustomElementCreator{
        #important_data=new ImportantData()
        constructor(){

        }

        #generate_custom_elements(){
                //js-canvas style-canvas
            const datas=[...this.#important_data.custom_elements]
            datas.map(val=>{
                this.#create_custom_el({Custom_el_name:val})
            })
        }

        #create_custom_el({Custom_el_name}){
            //check for available custom name if not available then create it
            if (!customElements.get(Custom_el_name)) {
            customElements.define(Custom_el_name, class extends HTMLElement {
                constructor() {
                    super();
                    const important=new ImportantData()
                    this.canvas_attr=important.canvas_attr
                   // const shadow = this.attachShadow({ mode: 'open' });
                     //   shadow.innerHTML=""
                       // const style = document.createElement("style");
                         // style.textContent = document.getElementById("crimsonStyle").textContent;
                          //shadow.appendChild(style);
                        const el=this
                            el.classList.add("d-*none*")    
                            if(!el.hasAttribute(this.canvas_attr)){
                                throw new Error(`custom element <${Custom_el_name}> must have attribute ${this.canvas_attr} to work properly`)
                                // throw Error(`custom element <${Custom_el_name}> must have attribute ${this.canvas_attr} to work properly`)  
                            }
                    // console.log("custom element created")
                }
                connectedCallback() {
                    // console.log("custom element connected")
                }
                disconnectedCallback() {
                    // console.log("custom element disconnected")
                }
                attributeChangedCallback(name, oldValue, newValue) {
                    // console.log(`custom element attribute changed: ${name} from ${oldValue} to ${newValue}`);
                }
                static get observedAttributes() {
                    return [new ImportantData().canvas_attr,"class"];
                }
        })
            }
    }
        install(){
            // const obj=new CustomElementCreator()
                this.#generate_custom_elements()
        }
    }
  /**
     * @desc class that containt converter translation algoritm
    */   
class MassTranslators{
      #dictionary=new Dictionary()
      #important_data      
      #dicts
      #style_tags
    constructor(){
        this.#dicts=this.#dictionary.get()
        this.#important_data=new ImportantData()
        this.#style_tags=this.#important_data.style_tag
    }
    /**
     * @desc translate dinval1 algoritm
     * @param {object} obj 
     * @param {string} obj.g2  
     * @param {(prop_val_result:{result:string})=>string} obj.prop_val_result 
    //  */
     Dinval1TranslatorAlgoritm=({g2,el=null,line_error,prop_val_result})=>{
        let prop_val=""
              const regex_4_false=/^\w+-\*\s*[^*]+\s*\*?$/g
              const datas=g2.split(/\s+/g)//.match(regex_4_false)

                //console.log("valnya ",datas)
                //untuk validasi error ketika tidak ditutup dengan asterrix *
              datas?.map(val=>{
                if(!regex_4_false.test(val))return
                  //iconsole.log("what is val ",val)
                   // if(g2
                   // if(val === 'clip')return
                 //console.log("valvalval ",val)
                    const attrValue = typeof el?.getAttribute === "function"? el.getAttribute(this.#important_data.canvas_attr) || el: el
                 if(!val.endsWith("*"))throw new Error(`your dinval1 must containt asterix * at the end please insert asterix like bg-*blue* your dinval1 is ${attrValue} ${line_error} element after body tag `)
              })
             
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
            //console.log(resultat)
       //return
           // console.log("eskul ",resultat)
      

      // if(!val.endsWith(";"))      return
        // ? dinamic val 1
        //const resultat = resultat        
        //for (const resultat of dinamicval1) {
            // console.log("interest",resultat[0])/
            const validatedata = this.#dicts[resultat[1]]?.first
            if (validatedata !== undefined) { // fill it
                prop_val += `${validatedata}:${resultat[2].trim()
                    };`
                // console.log("resultatsya ",resultat)
            }else{
              
              throw new Error(resultat[1]+` is not valid sintaks ${line_error} element after body tag `,el)
            }
        //}
        // return {prop_val}
    }
            prop_val_result({result:prop_val})
            // console.log("sparta ",prop_val)
    }

    /**
     * @desc translate dinval2 algoritm
     * @param {object} obj 
     * @param {string} obj.g2  
     * @param {(prop_val_result:{result:string})=>string} obj.prop_val_result 
    //  */
     Dinval2TranslatorAlgoritm=({g2,el=null,line_error,prop_val_result})=>{
        let prop_val="";
          const Error_display=({el,line_error,resultat,message=null})=>{
                    const attrValue = typeof el?.getAttribute === "function"? el.getAttribute(this.#important_data.canvas_attr) || el: el
                      throw new Error(`${resultat[message===null?1:0]} is not valid sintaks ${message??"please write correct format like m-&top&-*4rem*"}  ${attrValue} ${line_error} element after body tag `)
          }
        const dinamicval2 = g2.matchAll(/([\w]+?)-\&\s*([\w]+)\s*\&?-\*?\s*([^*]+)\s*\*?/g)
                for (const resultat of dinamicval2) {
                    //console.log("case ",resultat)
                    //const data=\w+-&\w+&?-*?\S*?  
                    //pesan jika tidak ditutup & maka pleease closed g0 with & like format  m-&top&
                      if(!/([\w]+?)-\&\s*([\w]+)\s*\&-\*?\s*([^*]+)\s*\*?/g.test(resultat[0]))Error_display({el,line_error,resultat,message:`please closed ${resultat[0]} with & like format  m-&top&`})
                    //pesan jika ada & sebagai penutup tetapi tidak diawali dengan  * maka pleea[se add g0 with * like format  m-&top&-*
                      //console.log("where ",resultat[0])
                      if(!/([\w]+?)-\&\s*([\w]+)\s*\&-\*\s*([^*]+)\s*\*?/g.test(resultat[0]))Error_display({el,line_error,resultat,message:`please add ${resultat[0]} with * like format  m-&top&-*`})
                    //pesan jika ada * sebagai pembuka tetapi tidak diakhiri dengan  * maka pleease closed g0 with * like format  m-&top&-*45rem*
                      if(!/([\w]+?)-\&\s*([\w]+)\s*\&-\*\s*([^*]+)\s*\*/g.test(resultat[0]))Error_display({el,line_error,resultat,message:`please closed ${resultat[0]} with * like format  m-&top&-*45rem*`})

                    // console.log("interest",resultat[0])
                 // return
                    const validatedata = this.#dicts[resultat[1]]?.first
                    if (validatedata != undefined) { // fill it
                        prop_val += `${validatedata}-${resultat[2]
                            }:${resultat[3]
                            };`
                        // console.log(validatedata)
                    }else{
                        Error_display({el,line_error,resultat})
                  }
                    // console.log(resultat)
                }
        // return {prop_val}
    
            prop_val_result({result:prop_val})
            // console.log("sparta ",prop_val)
    }

    /**
     * @desc translate pure css algoritm
     * @param {object} obj 
     * @param {string} obj.g2  
     * @param {(prop_val_result:{result:string})=>string} obj.prop_val_result 
    //  */
     PureCssTranslatorAlgoritm=({g2,el=null,line_error,prop_val_result})=>{
        let prop_val="";
          //? regexnya ada dua karena ada 2 versi penulisan pure css (color:blue;) dan background-color:blue;
        const purePropValCss = g2.split(/\s+/g)//.match(/(?:\w+\-\w+\:\s*[^:]+\s*[\;]*)|(?:\w+\:\s*[^:]+\s*[\;]*)/g)
        if(Array.isArray(purePropValCss)){
            purePropValCss?.map(val => { // ?isi propval ke dalam variable propval
              if(!/(?:\w+\-\w+\:\s*[^:]+\s*[\;]*)|(?:\w+\:\s*[^:]+\s*[\;]*)/.test(val))return
              if(!val.endsWith(";"))throw new Error(`your pure css must containt semicolon ; at the end please insert semicolon like background-color:blue; your pure css is ${el.getAttribute(this.#important_data.canvas_attr)} ${line_error} element after body tag`)
                prop_val += val
                //console.log("apa itu ",val)
                // console.log("apa itu2 ",prop_val)
            })
        }

        // return {prop_val}
    
            prop_val_result({result:prop_val})
            // console.log("sparta ",prop_val)
    }

    /**
     * @desc translate 37 predefined by dev css algoritm
     * @param {object} obj 
     * @param {string} obj.g2  
     * @param {(prop_val_result:{result:string})=>string} obj.prop_val_result 
    //  */
     Val37PredefinedClassByDevTranslatorAlgoritm=({g2,prop_val_result,el=null,line_error})=>{
        let prop_val="";
       const style_tag=Utils.$("#"+this.#important_data.attr_html_tag).textContent
        const dictionary_filter_by=({key})=>{
            return Object.entries(this.#dicts).filter(val=>val[1][key] === true)
        }
       const dicts=dictionary_filter_by({key:"defined"})
          const formated_dicts=dicts.reduce((obj,value,idx)=>{
                obj[value[0]]={...value[1]}
               return obj
            },{})
       
              //console.log("apakah valid ",formated_dicts)
       //console.log("data nih ",object.fromEntries(dicts))
         // check for existed class in style tag
                // ini untuk mengambil semua class yang didefinisikan
                // * ini untuk mengambil semua 37 class yang didefinisikan
              const  existed_in_style_tag = g2.split(/\s+/)//.match(/^\w+-\d+$/g) //jika pakai g2.match(/^\w+-\d+$/g) dia hanya akan cari 1 nilai yang cocok dan tidak mengembalikan banyak data karena ada diawali ^ dan diakhiri $ dan regex akan menemukan pola yang cocok lalu dia akan mengambil dan sudah itu aja tidak akan mengambil banyak data solusinya adalah menggunakkan regex_expression.test(val) 
        
            existed_in_style_tag?.map(val => {
                 if(!/^\w+-\d+$/.test(val))return
                // console.log("console all val  ",val)
                // ! jika berisi hal yang sama ambil yang terakhir
                //? val berisi classname utility mt-4 dst
                // ? dia adalah penerima 37 class yang didefinisikan oleh developer
                // ?apakah dia valid ada di dicts
                const splited_val = val.split("-")
                const res_val_key = splited_val[0]
                // console.log("curiga ",this.#dicts["py"].first)
                // console.log("curiga ",resValKey)
                const res_val = splited_val[1]
                const res_val_data = formated_dicts[res_val_key]?.first
                // console.log("console 1 ",splited_val)
                 //console.log({res_val_key,res_val})
                // ?cari dulu apakah dia ada di styletag [sudah tergenerate sebanyak 37 lewat 37 atau lebih maka dianggap tidak ngefek atau return]
                // ?logikanya kalau dia adalah defined class dan dia adalah valid[sudah ada didalam dicts] maka dia sudah dianggap memenuhi syarat | diproses [ditranslate ke css prop:value;]
                //? sebenarnya bisa langsung ditranslate ke regular css property:value; tapi ini untuk mengasah skill problem solving admin karena masih nub
                //? dan juga nanti melakukan cheking di styletag sangat berguna jika untuk mengecek apakah class sudah dibuat di dalam tag ?gunakkan sebagai class atau return agar kode program tidak dieksekusi : buat classnya beserta prop:val; lalu append ke dalam styletag
                // ! bug potential jika user mengubah 37 defined class menjadi lebih dari 37 maka bug akan appear karena jika ada \\w+{2,2}-45\ maka hanya dilimit sampai 37 
                      const throw_error= new Error(`error make sure your style is valid defined class [1 until 37] ${splited_val.join("-")} ${line_error} element after body tag `, el)
              if ( res_val_data == undefined)throw throw_error //
                      //if(res_val > 37)console.log(splited_val.join("-"))//validasi untuk 37 defined class lalu throw error
                      if(!style_tag.includes(splited_val.join("-")))throw throw_error//validasi untuk 37 defined class lalu throw error
                // console.log("hei its me ",{res:res_val,data:res_val_data})
                //? lakukan pengisian di propval | translating utility class into pure css
                    //? 37 defined class
                    // !bug jika diubah oleh user atau admin misal dari px ke rem maka mereka akan kesulitan saat menggunakkan dinamyc class karena ini udah aku rubah 37 class defined by dev dari px ke rem kok pas gunain dynamic class kok malah jadi px?? solusinya grab value berdasarkan pola regex \\.${val}[{\s^{}]+([^{}]+)[}]{1,1} ini dynamic regex ,di dalam style tag lalu ambil css value berdasarkan group 
                // propVal += `${resValData}:${resVal}px;`
                // !bug
                //? sebenarnya untuk mencocokkan dan mengambil defined class di styletag lalu diambil propvalnya | ditranslate jadi pure css tetapi karena sudah dicheck resvalnya maka dia valid merupakkan 37 defined class jadi langsung bisa ditranslate aja
                // ?ekperimental untuk mengasah skill koding admin karena admin agak sedikit nub
                //? check apakah ada classname di dalam style tag
                // ! intinya regex2BasedLoop itu dynamic regex yang mencari berdasarkan looping value contohnya 
                const regex2BasedLoopPatern=`\\.${val}[{\s^{}]+([^{}]+)[}]{1,1}`//.mt-37{}
                const regex2BasedLoop = new RegExp(regex2BasedLoopPatern, 'g')
                    // console.log("whats up ",this.#style_tags)
                const searchStyleTag = Utils.$(this.#style_tags).textContent.matchAll(regex2BasedLoop),
                    //? saat dispread maka searchStyleTag ,iteratornya habis dan di konversi jadi array di result_value jika ada group maka dia akan jadi nested array atau aray Multidimensi  
                    result_value = [...searchStyleTag]
                    // console.log("ekpextasi",result_value?.[0]?.[1])
                // jika ketemu ? ![] pakai classnya
                // console.log("bercerita ",Utils.$(this.#style_tags).textContent)
                if (result_value.length > 0) { 
                    // console.log("ekpextasi",result_value[0][1])
                   result_value.map(val=>{
                        // console.log("val 3737 ",val)
                        prop_val += `${val[1]}`
                   })
                }
                // !ketemu && length 0 created the class
                if (result_value.length < 1) { // console.log("creating class")
                }
                // console.log([...searchStyleTag])

            })
            // console.log("nai koto ga arimasu ",prop_val)
            // console.log(existedInStyleTag)
            prop_val_result({result:prop_val})
    }


    /**
     * @desc translate 37 predefined by dev css algoritm
     * @param {object} obj 
     * @param {string} obj.g2  
     * @param {(prop_val_result:{result:string})=>string} obj.prop_val_result 
    //  */
     variantsPredefinedClassByDevTranslatorAlgoritm=({el=null,line_error=null,g2,prop_val_result})=>{
        let prop_val="";
        const style_tag=this.#important_data.attr_html_tag
        const style_el=Utils.$("#"+style_tag)
        const styleTag =style_el.textContent
        // ?dinclass: it catch the value of 10 all variants such as border-color bg etc
        // ? apakah polanya cocok
        //!bug appear because why are u use the classes wichis your duty is to tranlate dynamic class ?? use groupnumb2 
        const regexs_4_variants=/(\w+)-\w+-\d+/g
        const variants_iterator=g2.matchAll(regexs_4_variants)
        const spreaded_variants_datas=[...variants_iterator]
        spreaded_variants_datas.map(val=>{
            // ? apakah ada di dicts 
            // console.log(val)
            // console.log(groupnum2)
            const rgx_string=val
            const g0=val[0]
            const g1=val[1]
         // console.log("yami no ronri ",g1)

        const dicts = this.#dicts
            const validate_data_variant=dicts[g1]
            // ?validasi untuk agar meyakinkan admin bahwa class ada didalam style tag karena jika ada di dicts maka tentunya ada di style tag dan tidak undefined
                 
            if(validate_data_variant != undefined){
                // ?validasi adakah di style tag
                const regex_4_check_to_style_tag=`\\.${g0}[{\s]+([^}]+)[\s}]+`
                const dynamic_regex_4_variants=new RegExp(regex_4_check_to_style_tag,"g")
                const [result_variants_regexs]=[...styleTag.matchAll(dynamic_regex_4_variants)]
                // console.log("lupa apaan ini ",styleTag)
                // console.log("lupa apaan ini ",result_variants_regexs)
                if(result_variants_regexs != undefined){
                    prop_val+=result_variants_regexs[1]
                    // console.log("mada ",result_variants_regexs[1])
                }else{
                 // if(el.className.textContent.match(/\w+-\w+-[10-90]/g)){
                   // alert("nice")
                 // }
                  // kalau gak ada 10 variant yang valid maka return 
                    const check=el?.className
                          if(check===undefined || check === "")return
                 // console.log("apa itu scale ",check)
                         // if(check.match(/\w+-\w+-(10|20|30|40|50|60|70|80|90)/g))return 
                          //if(!check.match(/\w+-\w+-(10|20|30|40|50|60|70|80|90)/g))return 
                  //console.log("yuka kenapa ya ",check)
                  throw new Error(`please make sure to write the the utility class correct format like bg-blue-(10 until 90) etc ${line_error} element after body tag `,el)
                }
                
                //console.log("lupa apaan ini ",g0)
                //console.log("lupa apaan 2 ",g1)
            }

          prop_val_result({result:prop_val})
        })
    
    }


} //?end of class

    /**
         * @desc ini untuk class utility yang memudahkan developer
         */
class Utils {
    constructor() { 
    }
    /**
         * @desc ini untuk mengambil semua element html dom
         * @return nodelists element 
         */
    static All=(el)=>document.querySelectorAll(el)

    /**
         * @desc ini untuk mengambil 1 element html
         * @return single element 
         */
    static $(el, cb = null) {
        return typeof cb == 'function' ? cb(el) : document.querySelector(el)
    }

     /**
     * 
     * @param {object}  params
     * @param {string} params.class_name
     * @return {string}
     * @desc it is for trim the whitespace*
     */
      static escape_css_whitespace=({class_name})=>{
        const regex=/\s+/g
        const replace_val=class_name?.replace(regex,"")
        // console.log("replace val "+replace_val)
        return replace_val
    }
    /**
     * {@link https://initer3737.github.io}
     * @param {object}  params
     * @param {string} params.class_name
     * @return {string}
     * @desc it is for escape the dinval 1 and 2 like pt-*34rem* become pt-\\*34rem\\*
     */
     static escape_css=({class_name})=>{
        const regex=/([\*\&\(\)])/g
        const replace_val=class_name?.replace(regex,"\\$1")
        // console.log("replace val "+replace_val)
        return replace_val
    }

    /**
     * @param {object}  params
     * @param {string} params.type
     * @return {string}
     * @desc it is for formating data
     */
     static formatData=({type='raw',data})=>{
        const required=['id','raw','class','el']
        const required_value=['#','','.','']
        if(!required.includes(type))throw Error(`param type must have one of this value [${required}]`)
            const forming_to_objects=required.reduce((obj,key,index)=>{
                    obj[key]=required_value[index]
                return obj
            },{})
        const result=forming_to_objects[type]+data

       // console.log("replace val "+result)
       return result
     }
  // ?for convert start
  /**
   * @desc untuk mengkonversi ke syntax css
   * @return pure css 
   * @desc for convert to css syntax
   * @desc jika raw false maka dia adalah class
   * @return pure css 
   *@param {object} obj
   *@param {string} obj.class_name
   *@param {string} obj.prop_val
   *@param {boolean} obj.is_raw 
   *@param {(data:{result:string}=>void)} obj.result
   */
  static convert_to_pure_css({ class_name, prop_val , is_raw=true,result }) {
    const is_raw_param=is_raw?"":"."
      , format = `
    ${is_raw_param}${class_name}{
        ${prop_val} 
    }
`
    if(typeof result != "function")throw Error("param result must be a callback")
    return result({result:format})
  }
  // ? end of function
  // ?for convert end
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

// ?normalize start
 /**
* @desc ini buat normalize classnya
*@param {object} obj 
*@param {string} obj.class_name
*@param {regex} obj.regex_patern
*/
static normalize=({class_name,regex_patern})=>{
    const t =class_name
    if(t != undefined){
       const classData=t.className.replace(regex_patern,(match,offset,fullStr)=>{
           const cocok=match.replace(/\s+/g,'')
           return cocok
           })
           // console.log("match "+classData)
           t.className=classData
    }
}
// ?normalize end

} // end

 /**
         * @desc this is to store dictionary data for our library
   
 */
class Dictionary{
    constructor(){}
//?dictionary for translate the utility class start        
    /**
         * @desc ini buat mapping class utility kayak mt dll dan untuk mentranslate ke dalam bentuk css murni
         * @return object dari dicts
         * @desc it is for make a dictionary in order to translate utility class like w-*12rem* become width, or pt become padding-top , to make your code organize and easy to maintain 
         * @return object of dicts
         */
     #generate_dictionary() { // ? promise : class that defined by developer 37 class like pt-0{pading-top:0px;} and until 37
        const layout_box_model = {
            w: {
                first: "width",
                dinamic: true,
                defined: true
            },
            h: {
                first: "height",
                dinamic: true,
                defined: true
            },
            d: {
                first: "display",
                dinamic: true,
                defined: false
            },
            pos: {
                first: "position",
                dinamic: false,
                defined: false
            },
            idx: {
                first: "z-index",
                dinamic: true,
                defined: true
            },
            ovflow: {
                first: "overflow",
                dinamic: true,
                defined: false
            },
            bxsizing: {
                first: "box-sizing",
                dinamic: true,
                defined: false
            },
            box: {
                first: "box",
                dinamic: true,
                defined: false
            },
            trans: {
                first: "transform",
                dinamic: true,
                defined: false
            },

        },
            typography = {
                font: {
                    first: "font",
                    dinamic: true,
                    defined: false
                },
                fs: {
                    first: "font-size",
                    dinamic: true,
                    defined: true
                },
                fw: {
                    first: "font-wheight",
                    dinamic: true,
                    defined: false
                },
                fsty: {
                    first: "font-style",
                    dinamic: true,
                    defined: false
                },
                text: {
                    first: "text",
                    dinamic: true,
                    defined: false
                },
                textalign: {
                    first: "text-align",
                    dinamic: true,
                    defined: false
                },
                texttransf: {
                    first: "text-transform",
                    dinamic: true,
                    defined: false
                },
                textdeco: {
                    first: "text-decoration",
                    dinamic: true,
                    defined: false
                },
                lineh: {
                    first: "line-height",
                    dinamic: true,
                    defined: true
                },
                letterspace: {
                    first: "letter-spacing",
                    dinamic: true,
                    defined: true
                }
            },
            colors = {
                color: {
                    first: "color",
                    dinamic: true,
                    defined: true,
                    variant:true
                },
                bg: {
                    first: "background",
                    dinamic: true,
                    defined: true,
                    variant:true

                },
                bgs: {
                    first: "background-size",
                    dinamic: true,
                    defined: true,
                    variant:true

                },
                brdr: {
                    first: "border",
                    dinamic: true,
                    defined: true,
                    variant:true

                }
            },
            dicts = {
                ...colors,
                ...layout_box_model,
                ...typography,
                p: {
                    first: "padding",
                    dinamic: true,
                    defined: true
                },
                m: {
                    first: "margin",
                    dinamic: true,
                    defined: true
                },
                t: {
                    first: "top",
                    dinamic: true,
                    defined: true
                },
                l: {
                    first: "left",
                    dinamic: true,
                    defined: true
                },
                r: {
                    first: "right",
                    dinamic: true,
                    defined: true
                },
                b: {
                    first: "bottom",
                    dinamic: true,
                    defined: true
                }
            };
        ['p', 'm'].forEach(key => {
            ['t', 'l', 'r', 'b'].forEach(side => {
                const key2 = key + side // pt pl etc
                dicts[key2] = {
                    first: `${dicts[key]['first']
                        }-${dicts[side]['first']
                        }`,
                    dinamic: true,
                    defined: true
                }
            })
            dicts[key + 'x'] = {
                first: `${dicts[key]['first']
                    }-inline`,
                dinamic: true,
                defined: true
            }
            dicts[key + 'y'] = {
                first: `${dicts[key]['first']
                    }-block`,
                dinamic: true,
                defined: true
            }
        })
        //  console.log("why are no py ",dicts)
        // console.log("why are no py ",newsobj)

        return dicts

    }
//?dictionary for translate the utility class end

    get=()=>this.#generate_dictionary()
}



/**
 * @desc it is class that store important data
 */
class ImportantData{
        #datas;
    constructor(){
        this.attr_html_tag="crimsonStyle"
        this.std_prefix="cr-"
        this.style_tag="style"
        this.canvas_attr="canvas-attr"
        this.root=":root"
        this.custom_elements_style="style-canvas"
        this.custom_elements_dinamyc_class="dinamyc-canvas"
        this.custom_elements_js="js-canvas"
        this.custom_elements_var="var-canvas"
        this.custom_elements=[this.custom_elements_js,this.custom_elements_dinamyc_class,this.custom_elements_style,this.custom_elements_var]
        // todo https://www.oscarbustos.dev/blog/modern-css-reset/
        this.reset_style=`
        /* 
        Modern CSS Reset
        A practical baseline for better web development
      */
      /*our roots to store variable css*/
      :root{
        --blue:dodgerblue;
      }
      /* 1. More intuitive box-sizing model */
      *, *::before, *::after {
        box-sizing: border-box;
      }
      
      /* 2. Remove default margin */
      * {
        margin: 0;
      }
      
      /* 3. Enable keyword animations */
      html {
        interpolate-size: allow-keywords;
      }
      
      body {
        /* 4. Add accessible line-height */
        line-height: 1.5;
        /* 5. Improve text rendering */
        -webkit-font-smoothing: antialiased;
        color: #111;
        background: #fff;
      }
      
      /* 6. Improve media defaults */
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
      }
      
      /* 7. Inherit fonts for form controls */
      input, button, textarea, select {
        font: inherit;
      }
      
      /* 8. Avoid text overflows */
      p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
      }
      
      /* 9. Improve line wrapping */
      p {
        text-wrap: pretty;
      }
      h1, h2, h3, h4, h5, h6 {
        text-wrap: balance;
      }
      
      /* 10. Create a root stacking context */
      #root, #__next {
        isolation: isolate;
      }
        `
        this.#datas={
            html_attr:this.attr_html_tag,
            std_prefix:this.std_prefix,
            style_tag:this.style_tag,
            reset_style:this.reset_style,

        }
    }

    /**
     * @desc it is function to get datas from private properties internal class
     * @return new Set
     */
    get=()=>this.#datas

    get_colors(){
        //https://colorhunt.co/palette/0d1a631a2ca32845d6f68048
        //digenerate secara otomatis mainkan saturasi format hsl atau rgb
      const colors_data={
        blue:{rgb:[13,26,99]},
      }
      const nine_variants=[]
        Object.entries(colors_data).map(val=>{
            const [color_name,color_val]=val
            for(let i=1;i<=10;i++){
                const variant=i*10
                nine_variants.push({
                    [`${color_name}-${variant}`]:`rgba(${color_val.rgb[0]},${color_val.rgb[1]},${color_val.rgb[2]},${variant/100})`
                })
            }
        })
        return nine_variants
    }
}


/**
 * @desc it is class that generate catch
 */
class CatchData{
    /**
     * @desc it is function that generate catch
     * @return new Set
     */
    generateCatch=()=> new Set()
}


/**
 * @desc it is class to do dom scans
 * tujuannya untuk dom scannings
 */
 class DomScanner {
    /** 
        * @desc ini buat menscan semua element dom yang ada di halaman html kecuali script ,head dan link , 
        *@desc fungsi buat mengolah dynamic value ,dynamic class dan fitur kita kedepannya 
        * @return void
        * @param {object} obj
        * @param {(val:{val:string})=>void} obj.fn
        * @desc it is to scan all dom element of html except script link style tag  
        *@desc function to proccess dynamic value ,dynamic class and for our next fiture 
        * @return void
    */
        scanDoms(fn,{selector=null}) {
                let selects=selector!=null?selector:"*:not(script,link,style,head,html,meta,title,body)"
            const doms = Utils.All(selects)
                doms.forEach((val,idx)=>{
                    //  console.log(val)
                    fn({val,idx:idx})
                //   this.#dinamycVal({class_names:val})
                })
        } //? end of function
 }

/**
 * @desc it is class that generate 37 predefined class by dev and 10 variants
 * tujuannya untuk inisialisasi 10 variants dan 37 defined by developer
 */
class Styles {
        #dict
        #important_data=new ImportantData()
        #style_tag
        #std_attr_html_tag
        #reset_style
    constructor(){
        this.#dict=new Dictionary().get();
        this.#style_tag=this.#important_data.style_tag
        this.#std_attr_html_tag=this.#important_data.attr_html_tag
        this.#reset_style=this.#important_data.reset_style
    }
// ?create style tag element and generate default style start
    // ! generate style tag apend to head tag
    // ? generate , 0-37 , color 10 -90 variant include text and bg
    /**
         * @desc menggenerate style preset dan beberapa 10 variant dan 37 class
         * @return void
         * @desc generate style preset and some 10 variant dan 37 class
         * @return void
         */
     generate_styles() {
      if (document.getElementById(this.#std_attr_html_tag)) return
        const dictionary_filter_by=({key})=>{
            return Object.entries(this.#dict).filter(val=>val[1][key] === true)
        }
        const defined=dictionary_filter_by({key:"defined"})
        const variants=dictionary_filter_by({key:"variant"})
        // console.log("colons ",promised)
        const style_tag = document.createElement(this.#style_tag)
        style_tag.setAttribute("id",this.#std_attr_html_tag)
        style_tag.textContent += this.#reset_style
        for (let i = 0; i <= 37; i++) {
            for(let j=0;j<defined.length;j++){     
                Utils.convert_to_pure_css({class_name:`${defined[j][0]}-${i}`,is_raw:false,prop_val:`${defined[j][1].first}:${i}px;`,result:(({result})=>{
                    // console.log("was this ",result)
                    style_tag.textContent+=result
                })})
            }

         } 
//[bug] Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content.
         this.#important_data.get_colors().map(val=>{
            const [ [g1value,g2rgb]=data2]=Object.entries(val)
                // console.log("variants ",g1value)
                for(let i=0;i<variants.length;i++){
                    const data_variant=variants[i]
                    // console.log(`${data_variant[0]}-${g1value}{${data_variant[1].first}:${g2rgb};}`)
                    Utils.convert_to_pure_css({class_name:`${data_variant[0]}-${g1value}`,is_raw:false,prop_val:`${data_variant[1].first}:${g2rgb};`,result:(({result})=>{
                    // console.log("was this ",result)
                    style_tag.textContent+=result
                })})
                }
         })

        Utils.$("head").appendChild(style_tag)
    }
// ?create style tag element and generate default style end

}

/**
 * @desc it is class that specify what fitur of our library like dinval 1 2 and dinamyc class etc
 * tujuannya untuk menyimpan fitur dari library kita
 */
class Fiture {
      #mass_translator
      #catchs
      #dicts
      #important_data=new ImportantData()
      #style_tag;  
      constructor(){
          this.#catchs=new CatchData().generateCatch()
        this.#dicts=new Dictionary().get()
        this.#mass_translator=new MassTranslators()
        this.#style_tag=this.#important_data.attr_html_tag
    }
// ?our fiture start
    /**
         * @desc for dinamyc class 
         * @object obj
         * @param {string} obj.class_name
         * @return void
         */
     dinamycClass({class_name,line_error=null}) {
          //normalize dinval1 
            Utils.normalize({regex_patern:/\w+-\*\s*[^*]+\s*\*/g,class_name:class_name})


       //console.log("checking dincalss ",class_name)
        let classes = class_name?.getAttribute(this.#important_data.canvas_attr).replace(/\w+-\*\s*[^*]+\s*\*/g,(match,offset,fullstr)=>{
          return match.replace(/\s+/g,"")
        })
        
      // console.log("classes ",classes)
        const dicts = this.#dicts
        const style_el=Utils.$("#"+this.#style_tag)
            if(style_el == undefined)return
        const styleTag =style_el.textContent
        //dom akana meremove class yang sama atau duplikat jadi gunakkan attribute saja
        // aproved by admin
        const regexs = /([\w-]+)-[\^]\s*([^\^]+?)\s*[\^]/gi

       const lastDinclassdatas = []
       const lastDinclassresult = classes?.match(regexs)
       lastDinclassresult?.map(val => {
         lastDinclassdatas.push(val)
         //console.log(val)
       })
       // console.log("datasadu ",class_name)
       // console.warn("warning!")
       // console.error("error!")
       // ?what happen if lastDinclassdatas is null or [] nothing happened
       const lastDinclassdata = lastDinclassdatas?.slice(-1)[0]
       if(!lastDinclassdata)return
       if(lastDinclassdatas.length >1){
         //console.warn("multiple dynamic class detected, you must use dynamic class only one time in a single element to avoid unexpected behavior, please only use 1 dinamyc class per element")
         throw new Error(`multiple dynamic class detected, you must use dynamic class only one time in a single element to avoid unexpected behavior, please only use 1 dinamyc class per ${this.#important_data.custom_elements_style} element ${class_name.getAttribute(this.#important_data.canvas_attr)} ${line_error} element after body tag`)
         
       }
       // console.log("last dinclass ", lastDinclassdata)
       // ? it generate class then append to style tag like
       // .card{prop:value;}
       // solution 1 : use function to generate it
       // ?solution 2 : use interpolate string
       let prop_val = ''
       let class_name_result = ''



        // ?solution ganti classe classes.matchAll dengan last dynamic class
        for (const result of lastDinclassdata.matchAll(regexs)) {
            // ?translate it to regular css but not in here, it generate when it[dinamyc class] done the translate to regular css or pure css3 must be in the end
            // console.log("result ",result)
            // ?ambil classname
            class_name_result= result[1]
                // console.log(result[2])
                // ?ambil groupname yang ke 2 berisi semua dinval 1&2 pure css prop:val generated classes[10 variant and 37 defined class]
              const  groupnum2 = result[2]
                // console.log(groupnum2)
                // ?dinamic value yang ke 1 tidak mengandung pola \w+-\&[^*]+?\&-\*[^*]\*
                // ?dinamic value yang ke 1 tidak mengandung pola \w+-\&[^*]+?\&-\*[^*]\*
                /**
                 *? maybe you are asking why around the world u are not grouping it and then catch its value rather than do 2 or more regex checking  
                 *?the answer is simple because it is catch both dynamic val 1 wich is like w+-*[^*]* and val 2 like w+-&w+&-*[^*]*
                 *? what is (?:) it is regex non capturing group it is usefull to make |  or expression based on regex patern 
                 */

                //  ? dinamic val1
             this.#mass_translator.Dinval1TranslatorAlgoritm({el:class_name,line_error,g2:groupnum2,prop_val_result:({result})=>{
                   // console.log("MASUK DINVAL1");
                  prop_val+=result
                 // console.log("dinval algo ",result)
             }})
                //? dinamic val 2
            this.#mass_translator.Dinval2TranslatorAlgoritm({el:class_name,line_error,g2:groupnum2,prop_val_result:({result})=>{
                    prop_val+=result
                    // console.log("dinval2 nih ",result)
             }})
                //? pure css
                this.#mass_translator.PureCssTranslatorAlgoritm({el:class_name,line_error,g2:groupnum2,prop_val_result:({result})=>{
                    prop_val+=result
                   // console.log("pure css ",prop_val)
             }})
          //console.log("ctho eto g2 ",groupnum2)
                //? 37 defined class by dev
            this.#mass_translator.Val37PredefinedClassByDevTranslatorAlgoritm({el:class_name,line_error,g2:groupnum2,prop_val_result:({result})=>{
                    prop_val+=result
                     //console.log("37 by dev ",result)
             }})
            
                    ///10 variants
            this.#mass_translator.variantsPredefinedClassByDevTranslatorAlgoritm({el:class_name,line_error,g2:groupnum2,prop_val_result:({result})=>{
                    prop_val+=result
                    // console.log("37 by dev ",result)
             }})
            
              
        
    
    // console.log("propval is ",{prop_val,class_name_result})
        // const validate_from_dicts
        // aproved by admin
        Utils.convert_to_pure_css({class_name:class_name_result,is_raw:false,prop_val:prop_val,result:({result})=>{
            Utils.register_style({result:result})
            // console.log({result})
        }})

    }}
    // ? end of function
        /**
         * @typedef {(null|number)} line_error
* @desc ini buat menstranslate dinamyc value menjadi pure class css classsname berdasarkan dynamyc valuenya dan dicheck di dicts apakah ada nah kurang lebih begitu
* @return {string} classlist each element 
*@param {object} obj 
*@param {line_error} obj.line_error
*@param {string} obj.class_name 
*/
  dinamycVal1({class_name,line_error=null}) { 
    //todo lakukan normalisasi terhadap kelass
     // ! jika di class sama[ada pt-*5*] tapi ada diclass yang lain ada spasi[ada pt-* 5 *] maka dia tidak valid
     //!jika undefined maka classname attr tidak ditulis maka lakukan pengecekan yang dinormalisasi adalah yang ditulis dan dia bukan undefined 
    //  console.log("apa itu ",classNames)
        Utils.normalize({regex_patern:/\w+-\*\s*[^*]+\s*\*/g,class_name:class_name})
              const class_names=class_name.className.match(/\w+-\*[^*]*\*?/g);
             class_names?.map(class_name=>{

               let prop_val=""
               const escaped_clsnm=Utils.escape_css({class_name:class_name})
               this.#mass_translator.Dinval1TranslatorAlgoritm({el:class_name,line_error,g2:class_name,prop_val_result:({result})=>{
                 prop_val+=result
                 //console.log("dinval 1 ",result)
                 // if(!escaped_clsnm || !result)return
                 //console.log(escaped_clsnm,"resultnya ",result)
                 //return  
                 Utils.convert_to_pure_css({class_name:escaped_clsnm,prop_val:prop_val,is_raw:false,result:({result})=>{
                  // console.log("dinvals ",result)
                   const rawdata=class_name
                    const catchs=this.#catchs
                      if(catchs.has(rawdata))return
                   catchs.add(rawdata)

                   Utils.register_style({result:result})
                 }})
               }})
             }) 
    return 
    //  console.log("valid ",t.className)
    //console.log("why yes ",class_name)
    const catchs=this.#catchs

    // console.log(catchs)        

    const dicts=this.#dicts
    // console.log("who was that ",dicts)
    // console.log("who was that ",t)
  
        // ? to search value in the style tag
    const regex_catch_variable_elem=/\w+-\*\s*[^*]+?\s*\*/g
    // ? to search value in the style tag
    // ! iterator_dinval1_styletag mengandung nested array
    //    ! t could be undefined 
        const cls_name=class_name?.className
    if(cls_name === undefined)return
    const iterator_dinval1_classname=[...class_name?.className?.matchAll(regex_catch_variable_elem)]
// console.log("wujud dinval1 ",iterator_dinval1_classname)
     if(iterator_dinval1_classname.length < 1)return
        //   console.log("awalun ",iterator_dinval1_classname)
   
        //   ?val in the iterator_dinval1 is classname in the element html that is for dinval 1 wichis \w-\*[^*]+\*
    // ?solution 1 aproved! start
    // todo check apakah tidak ada di catchs
    // console.log("waw ",iterator_dinval1_classname)
          
    const is_no_in_caths=iterator_dinval1_classname.filter(val=>!catchs.has(val[0]))
    if(is_no_in_caths?.length >0){
        // todo transalte ke css biasa lalu raw value di add ke catchs
        // ?raw value berupa class dinamic biasa seperti px-*35rem*
        // console.log("caci ",is_no_in_caths)
        is_no_in_caths.forEach(val=>{
            const escaped_clsnm=Utils.escape_css({class_name:val[0]})
                ,rawdata=val[0]
                catchs.add(rawdata)
            const prop_val=rawdata.replace(/([\w-]+)-\*([^*]+)\*/g,(match,g1,g2,_,full)=>{
                    // console.log("what is g1 ",g1)
                    const test1=dicts[g1]?.first
                    if(!test1)throw new Error(g1 +` is not valid sintaks ${line_error} element after body tag`)
                    const prop_vals=`${test1}:${g2};`
                    return prop_vals
                })
            Utils.convert_to_pure_css({class_name:escaped_clsnm,prop_val:prop_val,is_raw:false,result:({result})=>{
                // console.log("dinvals ",result)
                Utils.register_style({result:result})
            }})
            // console.log("oke bisa jadi ",escaped_clsnm)
            //  this.#generate_style({class_name:escaped_clsnm,prop_val:prop_val})
        })
    }
    
}
// ? end of function

        /**
         * @typedef {(null|number)} line_error
* @desc ini buat menstranslate dinamyc value2 menjadi pure class css classsname berdasarkan dynamyc valuenya dan dicheck di dicts apakah ada nah kurang lebih begitu
* @return {string} classlist each element 
*@param {object} obj 
*@param {line_error} obj.line_error
*@param {string} obj.class_name 
*/
  dinamycVal2({class_name,line_error=null}) { 
    //todo lakukan normalisasi terhadap kelass
     // ! jika di class sama[ada pt-*5*] tapi ada diclass yang lain ada spasi[ada pt-* 5 *] maka dia tidak valid
     //!jika undefined maka classname attr tidak ditulis maka lakukan pengecekan yang dinormalisasi adalah yang ditulis dan dia bukan undefined 
    //  console.log("apa itu ",classNames)
        Utils.normalize({regex_patern:/\w+-\&\s*[^\&]+\s*\&-\*\s*[^*]+\s*\*/g,class_name:class_name})
              const class_names=class_name.className.match(/\w+-\&[^\&]+\&?-\*?[^*]+\*?/g);
             class_names?.map(class_name=>{
                 // console.log("dinval2 nih bro ",class_name)
               let prop_val=""
               const escaped_clsnm=Utils.escape_css({class_name:class_name})
               this.#mass_translator.Dinval2TranslatorAlgoritm({el:class_name,line_error,g2:class_name,prop_val_result:({result})=>{
                 prop_val+=result
                 //console.log("dinval 1 ",result)
                 // if(!escaped_clsnm || !result)return
                 //console.log(escaped_clsnm,"resultnya ",result)
                 //return  
                 Utils.convert_to_pure_css({class_name:escaped_clsnm,prop_val:prop_val,is_raw:false,result:({result})=>{
                  // console.log("dinvals ",result)
                   const rawdata=class_name
                    const catchs=this.#catchs
                      if(catchs.has(rawdata))return
                   catchs.add(rawdata)
                        //  console.log("checking ",result)
                   Utils.register_style({result:result})
                 }
               })
            }}) 
        })
    }
    
//}
// ? end of function
/**
* @desc ini buat menstranslate variable value lalu di append ke root untuk bisa digunakan di css biasa dengan format --nama-variable:val; dan bisa digunakkan dengan fungsi var(--nama-variable)
* @return {string} classlist each element 
*@param {object} obj 
*@param {(number||null)} obj.line_error
*@param {string} obj.class_name
*/
variableStyle({class_name,line_error=null}) { 
        // Utils.normalize({regex_patern:/\w+-\*[^*]+\*/g,class_name:class_names})
    const catchs=this.#catchs
    const dicts=this.#dicts
    // console.log("who was that ",dicts)
    // console.log("who was that ",t)
   //const validate_all_syntaxs_is_!valid=[]
//console.log("what is me ",line_error)

        // ? to search value in the style tag
    const regex_catch_variable_elem=/(?:--[\w-\d]+:[\w\s-\d]+;)/g
    // ? to search value in the style tag
    // ! iterator_dinval1_styletag mengandung nested array
    //    ! t could be undefined 
  //    cls_name itu adalah class_name  yang sudah di ekstraksi attribute canvas-attrnya
    const cls_name=class_name?.getAttribute(this.#important_data.canvas_attr)?.trim()
    if(!cls_name || !cls_name.match(regex_catch_variable_elem)){
      throw new Error(`variable style not detected, please make sure to write the variable style in the correct format like --nama-variable:value; ${line_error} element after body tag `,class_name)
    }
    if(cls_name == undefined)return
  const iterator_variable=[...cls_name?.matchAll(regex_catch_variable_elem)]

     if(iterator_variable.length < 1)return
        //   console.log("awalun ",iterator_dinval1_classname)
   
        //   ?val in the iterator_dinval1 is classname in the element html that is for dinval 1 wichis \w-\*[^*]+\*
    // ?solution 1 aproved! start
    // todo check apakah tidak ada di catchs
    // console.log("waw ",iterator_dinval1_classname)
     // console.log("is no catch ",cls_name)
      //todo some untuk mengecek 1 nilai dia array adakah yang bernilai true
      if(cls_name.split(" ")?.some(value=>!value.trim().endsWith(";")))throw new Error(`your variable css must containt semicolon ; at the please insert semicolon like --var:someval; your variable is ${class_name.getAttribute(this.#important_data.canvas_attr)} ${line_error} element after body tag`)
         //? kalau tidak ada di dalam catch maka masukkan ke dalam catch data  
    const is_no_in_caths=iterator_variable?.filter(val=>!catchs.has(val[0]))
      if(is_no_in_caths?.length > 1)throw new Error(`${this.#important_data.custom_elements_var} element must only contain 1 variable css per element ${class_name.getAttribute(this.#important_data.canvas_attr)} ${line_error} element after body tag`)
    if(is_no_in_caths?.length >0){
        // todo transalte ke css biasa lalu raw value di add ke catchs
        // ?raw value berupa class dinamic biasa seperti px-*35rem*
        // console.log("caci ",is_no_in_caths)
        is_no_in_caths.forEach(val=>{
            const escaped_clsnm=Utils.escape_css({class_name:val[0]})
                ,rawdata=val[0]
                catchs.add(rawdata)
                 //console.log("dinvals ",escaped_clsnm)
                Utils.register_style({result:escaped_clsnm,sisip:({value,style_tag})=>{
                   // console.log("sisip adalah ",value)
                   // console.log("result adalah ",escaped_clsnm)
                   const replace_style_tag=style_tag.replace(/\:root\s*?\{([\s\S]*?)\}/gi,(full_match,g1,offset,str)=>{
                      const return_val=`:root{
                        ${g1}
                        ${escaped_clsnm}
                    }`.trim()
                     //console.log("checking the textContent of styletag... ",return_val)
                      return return_val
                    } );
                     return replace_style_tag
                }})
            //}})
            // console.log("oke bisa jadi ",escaped_clsnm)
            //  this.#generate_style({class_name:escaped_clsnm,prop_val:prop_val})
        })
    }
    
}
// ? end of function
/**
* @desc ini buat error checker apa yang ada didalam style_tag jika developer tidak fokus dalam mengembangkan website
* @return {string} classlist each element 
*@param {object} obj 
*@param {(number||null)} obj.line_error
*@param {string} obj.class_name
*/
predefined37And10VariantsChecker({class_name,line_error=null}) { 
   //todo cari yang ada pola (?:[\w-]+) 
   // console.log("besplatna ",class_name)
    const class_name_attr=class_name.className
            this.#mass_translator.Val37PredefinedClassByDevTranslatorAlgoritm({el:class_name,line_error,g2:class_name_attr,prop_val_result:({result})=>{
                    //prop_val+=result
                    // console.log("37 by dev ",result)
             }})

            this.#mass_translator.variantsPredefinedClassByDevTranslatorAlgoritm({el:class_name,line_error,g2:class_name_attr,prop_val_result:({result})=>{
                    //prop_val+=result
                    // console.log("37 by dev ",result)
             }})
  
}
}
/**
 * @desc it is class that make u can do perform styling html without touching your css file
 * tujuannya untuk menginstall semua part yang dibutuhkan
 */
class CrimsonStyle {
    // ? constructor and properties start
        #dom_scanner=new DomScanner()
        #important_data=new ImportantData()
    // #style_tag_data=Utils.$("#crimsonStyle")
        #generate_styles
        #dinamycClass
        #scanDoms
        #dinamycVal1
        #dinamycVal2
       #predefined37And10VariantsChecker        
        #std_attr_html_tag
        #dict
        #std_prefix
        #catch_data=new CatchData()
        #catchs=this.#catch_data.generateCatch()
        #fiture =new Fiture()
        #var_style 
        #canvas_attr;
        #custom_element_creator;
    constructor() { // ? use prefix when its<crimsonStyle attr> not there<html tag>
        const styles=new Styles()
        const custom_element=new CustomElementCreator()
        this.#custom_element_creator=custom_element.install.bind(custom_element)
        this.#generate_styles=new Styles().generate_styles.bind(styles)
        this.#dinamycClass =this.#fiture.dinamycClass.bind(this.#fiture)
        this.#var_style =this.#fiture.variableStyle.bind(this.#fiture)
        this.#dinamycVal1 =this.#fiture.dinamycVal1.bind(this.#fiture)
        this.#dinamycVal2 =this.#fiture.dinamycVal2.bind(this.#fiture)
        this.#predefined37And10VariantsChecker =this.#fiture.predefined37And10VariantsChecker.bind(this.#fiture)
        this.#scanDoms=this.#dom_scanner.scanDoms.bind(this.#dom_scanner)
        const kamus=new Dictionary().get()
        ,std_attr_html_tag =this.#important_data.attr_html_tag
        this.#canvas_attr =this.#important_data.canvas_attr
        this.#std_attr_html_tag=std_attr_html_tag
        // ,style_tag=Utils.$("#"+std_attr_html_tag)
            this.#dict=kamus
        if (Utils.$("html").hasAttribute(this.#std_attr_html_tag)) {
            this.#std_prefix = ''
        }
        // this.#style_tag_data =style_tag
        this.#catchs=this.#catch_data.generateCatch()
    }

    // ? constructor and properties end
        // #style_tag_data; 
         // ! when attr in tag html exist ? std prefix clear : std prefix not clear dev must use standar prefix like cr_pt_37 
    // todo https://jsdoc.app/tags-param
// ?install start
    /**
         * @desc ini untuk menginstall aplikasi library css kita
         * @return void
         * @desc this is for install our css library
         * @return void
         */
install() {
    this.#generate_styles()
    this.#custom_element_creator()

    const elements = this.#important_data.custom_elements

    Promise.all(
        elements.map(tag => customElements.whenDefined(tag))
    ).then(() => {

        this.#scanDoms(({val,idx})=>{
            const index = idx + 1

            try {
                //var canvas
              if (val.tagName.toLowerCase() === this.#important_data.custom_elements_var) {
                 // if (val.hasAttribute(this.#canvas_attr)) {
                      this.#var_style({class_name:val,line_error:index})
             // }
              }
                //dinamyc canvas
                if ( val.tagName.toLowerCase() === this.#important_data.custom_elements_dinamyc_class) {
                   // if (val.hasAttribute(this.#canvas_attr)) {
                        this.#dinamycClass({class_name:val,line_error:index})
                   // }
                }
              //dinamyc val2
                this.#dinamycVal2({class_name:val,line_error:index})
              //dinamyc val
                this.#dinamycVal1({class_name:val,line_error:index})
                  const not_custom_elements=elements.every(vals=>val.tagName.toLowerCase() !==vals)
                    //console.log("custom elements ",not_custom_elements)
              if(val.className !== undefined && val.className !== ""&& not_custom_elements){
                    if(val.tagName.toLowerCase() === this.#important_data.custom_elements_dinamyc_class)return ;
                //console.log("apaan tuh ",val.tagName)
                    
              //predefined37And10VariantsChecker  error checker
                this.#predefined37And10VariantsChecker({class_name:val,line_error:index})
              }

            } catch (error) {
                console.warn(error.message);
                console.error(error);
            }

        },{})

    })
}
// ?install end

}
// end of class

/**
* @desc untuk menginstall dan menyiapkan library kita agar bisa digunakkan oleh developer website
* @return void
* @desc to install and prepare our library so that can used by developer website
* @return void
*/
const setup = () =>new CrimsonStyle().install()

document.addEventListener("DOMContentLoaded", () => {
    setup()
})
