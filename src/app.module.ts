import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import {join} from 'path'
import { ResturantsModule } from './resturants/resturants.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
     
    }),
   ResturantsModule
  ],
  controllers:[],
  providers:[],
  
})
export class AppModule {}
