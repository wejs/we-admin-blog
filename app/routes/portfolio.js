import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  actions: {
    deleteRecord(record) {
      if (confirm(`Tem certeza que deseja deletar o portifolio "${record.get('title')}"? \nEssa ação não pode ser desfeita.`)) {
        record.destroyRecord()
        .then( ()=> {
          this.get('notifications').success(`O portifolio "${record.get('title')}" foi deletado.`);
          this.transitionTo('portfolio.index');
          return null;
        });
      }
    },
    changePublishedStatus(record, status) {
      set(record, 'published', status);
      if (status) {
        set(record, 'publishedAt', new Date());
      } else {
        set(record, 'publishedAt', null);
      }

      record.save()
      .then( (r)=> {
        if (status) {
          this.get('notifications').success('Portifolio publicado.');
        } else {
          this.get('notifications').success('Portifolio despublicado.');
        }
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
      });
    },
    save(record, alias) {
      record.save()
      .then( function saveAlias(content) {
        return alias.save()
        .then( ()=> {
          return content;
        });
      })
      .then( (r)=> {
        this.get('notifications').success('Dados salvos.');
        // move scroll to top:
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
        return err;
      });
    }
  }
});
