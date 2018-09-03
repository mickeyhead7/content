import * as EntriesController from '@app/applications/entries/controller';

export default app => {
  app.get('/', EntriesController.index);
};
