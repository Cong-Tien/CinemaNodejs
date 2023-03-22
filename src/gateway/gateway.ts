import { OnModuleInit, Param } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  SubscribeMessage,
} from '@nestjs/websockets';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { Server } from 'socket.io';
import { ticketDTO } from 'src/DTO/ticket.dto';
import { errorCode, successCode } from 'src/payload/response/DataResponse';

@WebSocketGateway()
export class MyGateway implements OnModuleInit {
  private prisma: PrismaClient = new PrismaClient();
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected');
    });
  }
  @SubscribeMessage('choseSeat')
  ChoseSeatEvent(@MessageBody() ticket: any, @Param('userid') id: number) {
    try {
      let choise = JSON.parse(ticket);
      choise.trang_thai = 2;
      choise.id_user = id;
      this.prisma.ticket.update({
        where: {
          id: choise.id,
        },
        data: choise,
      });
      this.server.emit('onListen', {
        statusCode: 200,
        desc: 'Get the list of selected seats successfully',
        data: this.prisma.ticket.findMany({
          where: {
            id_showtime: ticket.id_showtime,
          },
        }),
      });
    } catch (err) {
        this.server.emit('onListen', {
            statusCode: 500,
            desc: err,
            data: [],
          });
    }
    
  }

  @SubscribeMessage('buyTicket')
  BuyEvent(@MessageBody() ticket: any, @Param('userid') id: number) {
    try{
        let choise = JSON.parse(ticket);
    choise.map((ticket, index) => {
      ticket.trang_thai = 3;
      ticket.id_user = id;
    });
    this.prisma.ticket.update({
      where: {
        id: choise.id,
      },
      data: choise,
    });
    this.server.emit('onListen', {
      statusCode: 200,
      desc: 'Get the list of bought seats successfully',
      data: this.prisma.ticket.findMany({
        where: {
          id_showtime: ticket.id_showtime,
        },
      }),
    });
    }
    catch(err){
        this.server.emit('onListen', {
            statusCode: 500,
            desc: err,
            data: [],
          });
    }
  }
  @SubscribeMessage('cancelTicket')
  CancelTicketEvent(@MessageBody() ticket: any) {
    let choise = JSON.parse(ticket);
    choise.map((ticket, index) => {
      ticket.trang_thai = 0;
      ticket.id_user = 0;
    });
    this.prisma.ticket.update({
      where: {
        id: choise.id,
      },
      data: choise,
    });
    this.server.emit('onListen', {
      statusCode: 200,
      desc: 'Get the list of cancelled seats successfully',
      data: this.prisma.ticket.findMany({
        where: {
          id_showtime: ticket.id_showtime,
        },
      }),
    });
  }
}
