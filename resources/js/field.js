import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-state-select', IndexField)
  app.component('detail-nova-state-select', DetailField)
  app.component('form-nova-state-select', FormField)
})
