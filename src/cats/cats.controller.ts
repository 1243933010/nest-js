import { Controller,
  Req,
  Res,
  Get,
  Post,
  HttpCode,
  Header,
  Param,
  Body,
  HttpStatus,
  Bind,
  HttpException} from '@nestjs/common';
import {Request,Response} from 'express';
import {CreateCatDto} from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import {Cat} from './interface/cat.interface';



@Controller('cats')
export class CatsController {
    constructor(private  catsService:CatsService){}

  @Get()
  @HttpCode(210)
  findAll() {
    console.log('cats的子级路由不会触发这个打印')
    // return 'This action returns all cats';
    throw new HttpException({
      status:HttpStatus.FORBIDDEN,
      error:'This is a custom message'
    },403);
  }

  @HttpCode(208)
  @Header('Cache-Control', 'none')
  @Get('getMsg:id') //动态id
  test(@Req() request:Request ,@Param('id') id): string {  //@Param() params
    // console.log(request.query)//获取get对象内容
    // console.log(params.id)
    return `This action returns a get request ${id}`;
  }

  @HttpCode(209)
  @Post('postMsg')
  postFnc(@Req() request:Request):string{
    //   console.log(request.body)
    return 'This action adds a post request';
  }

  @Post('postTest')
  @Bind(Res({passthrough:true}))
  async postTest(@Body() createCatDto:CreateCatDto):Promise<Cat[]>{
      // return [];
      
    return this.catsService.findAll();
  }
}