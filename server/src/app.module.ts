import { Module }      from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://viks2332:admin@cluster0.urivg.mongodb.net/music-platform?retryWrites=true&w=majority'),
  ],
})
export class AppModule {

}
