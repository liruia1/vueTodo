import '../assets/style/footer.styl'

export default {
  data() {
    return { autor: 'chenying' }
  },
  render() {
    return (
      <div id='footer'>Written by {this.autor}</div>
    )
  }
}