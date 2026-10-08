import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { title } from 'node:process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'Üdv Hallandó!',
      inside_string: 'A nevem Dominik és a weboldalamat lasítod.'
    }
  }

  @Get('Bekezdes')
  @Render('bekezdesek')
  bekezdes(){
    return{
      title : 'Bekezdés oldal.',
      bekezdesek: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio mauris, varius vitae arcu at, iaculis ornare nisi. Vivamus felis quam, semper eu ornare nec, semper vel ante. Maecenas tristique metus augue, non pulvinar massa malesuada a. Nam tristique eget leo non volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis elementum neque. Nulla pretium neque nec sodales faucibus. Vestibulum libero libero, vestibulum id luctus nec, consectetur a sem. Etiam tincidunt elit facilisis, dapibus enim ut, tempus mauris. Morbi at tellus massa. Etiam tortor ligula, blandit eget sem quis, tincidunt ultrices enim. ',
      'Proin efficitur lacus dictum ipsum pharetra placerat. Ut condimentum malesuada ornare. Vestibulum sit amet turpis augue. Ut vitae elit tristique, condimentum magna convallis, congue est. Morbi commodo nisl egestas erat efficitur, non pretium mauris fermentum. Praesent iaculis sodales tincidunt. Praesent tristique porttitor dolor quis dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elementum venenatis dignissim. Morbi a tortor magna. Aenean porta elit auctor elit consequat, quis pretium dui venenatis.',
      'Nam aliquam odio in ipsum pretium, vulputate aliquam ipsum efficitur. Nunc urna nisi, mollis ac tincidunt eget, varius at purus. Fusce dictum risus quis dolor gravida, eget egestas lorem consectetur. Pellentesque a mauris tortor. Quisque eleifend justo sed diam viverra tincidunt. Morbi eu molestie est. Duis sed ex sed lacus blandit consequat. Nam ac cursus massa, in auctor nisl.',
      'Duis molestie, ex ut suscipit pulvinar, tortor velit tristique eros, a rhoncus ex justo ac enim. Ut commodo a lectus egestas pretium. Nam at ante sed tellus aliquam iaculis eget ut augue. Duis quis rhoncus risus. Morbi dolor libero, venenatis vel rutrum non, aliquam eu ipsum.',
      ]
    }
  }

  @Get('piros-kek')
  @Render('red-blue')
  getRed_Blue(){
    const rnd = Math.random() > 0.5 ? '#0000FF' : '#FF0000';


    return{
      title: "Piros-Kék",
      szinvaltoztatas: rnd
    }
  }
}
