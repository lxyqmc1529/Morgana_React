import { FormSchema } from "@/typings/schema";
class ShemaParser {
  static instance: ShemaParser;
  static getInstance() {
    if (!ShemaParser.instance) {
      ShemaParser.instance = new ShemaParser();
    }
    return ShemaParser.instance;
  }
  private constructor(){

  }
  parse(schema: Record<string,FormSchema>){
    const result :Record<string,any> = {};
    Object.entries(schema).forEach(([key,schema]) => {
      if(schema.default){
        result[key] = schema.default;
        return ;
      }
      switch(schema.type){
        case 'number':
          result[key] = this.parseNumber(schema);
          break;
        case'string':
          result[key] = this.parseString(schema);
          break;
        case 'boolean':
          result[key] = this.parseBoolean(schema);
          break;
        case 'array':
          result[key] = this.parseArray(schema);
          break;
        case 'object':
          result[key] = this.parseObject(schema);
          break;
        default:
          result[key] = this.parseAny(schema);
      }
    })
    return result;
  }
  parseString(schema:FormSchema){
    return '';

  }
  parseNumber(schema:FormSchema){
    return undefined;
    //0有时候会有特殊含义
  }
  parseBoolean(schema:FormSchema){
    return false;
  }
  parseArray(schema:FormSchema){
    return [];
  }
  parseObject(schema:FormSchema){
    if(!schema.properties) return {};
    return this.parse(schema.properties);
  }
  parseAny(schema:FormSchema){
    return undefined;
  }
}

export default ShemaParser.getInstance();