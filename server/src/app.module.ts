import { Module }         from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule }    from './track/track.module';
import { FileModule }     from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    TrackModule,
    FileModule,
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb+srv://viks2332:admin@cluster0.urivg.mongodb.net/music-platform?retryWrites=true&w=majority'),
  ],
})
export class AppModule {

}
