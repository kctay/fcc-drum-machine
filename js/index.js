var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var bankOne = [
{ letter: 'Q', id: 'Bass', src: 'http://www.denhaku.com/r_box/sr16/sr16bd/solid%20hl.wav' },
{ letter: 'W', id: 'Brass', src: 'http://cd.textfiles.com/swextrav8/swextrav8-7/wav/b24.wav' },
{ letter: 'E', id: 'Cello', src: 'http://www.cello.org/Sounds/Gstringarco.wav' },
{ letter: 'A', id: 'Chord', src: 'http://lapoc.de/samples/telshow-tele/cleanchord-D-01.wav' },
{ letter: 'S', id: 'Drumroll', src: 'http://cd.textfiles.com/swextrav8/swextrav8-7/wav/b9.wav' },
{ letter: 'D', id: 'Flute', src: 'http://www.kuni-net.com/oto72.wav' },
{ letter: 'Z', id: 'Guitar', src: 'http://lapoc.de/samples/telshow-tele/cleanchord-D-01.wav' },
{ letter: 'X', id: 'Harmonica', src: 'http://tipiwiki.free.fr/mus/HarmonicaSimple.wav' },
{ letter: 'C', id: 'Ochestra', src: 'http://www.bwass.org/bucket/HIT_3.wav' }];


var bankTwo = [
{ letter: 'Q', id: 'Organ', src: 'http://thecyberbuddy.com/sounds/tvsoap.wav' },
{ letter: 'W', id: 'Piano', src: 'http://membrane.com/sound/piano.wav' },
{ letter: 'E', id: 'Recorder', src: 'http://www.soundjay.com/misc/sounds/whistle-flute-1.mp3' },
{ letter: 'A', id: 'Saxophone', src: 'http://www.innisdale.ca/ICS3U/sax.wav' },
{ letter: 'S', id: 'String', src: 'http://david.guerrero.free.fr/Effects/Twang2.wav' },
{ letter: 'D', id: 'Synthesizer', src: 'http://dnfw.org/hl/sound/kke/hollow.wav' },
{ letter: 'Z', id: 'Tom Tom', src: 'http://www.denhaku.com/r_box/linn/lotom.wav' },
{ letter: 'X', id: 'Triangle', src: 'http://tipiwiki.free.fr/snd/Triangle.wav' },
{ letter: 'C', id: 'Violin', src: 'http://s1download-universal-soundbank.com/wav/9888.wav' }];var


DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);return _this;
  }_createClass(DrumPad, [{ key: 'componentDidMount', value: function componentDidMount()

    {
      document.addEventListener('keydown', this.handleKeyPress);
      window.focus(); // when website is first loaded, pressing keypad will work
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
    }

    // this handleKeyPress is for when using keyboard to press
  }, { key: 'handleKeyPress', value: function handleKeyPress(event) {
      if (event.keyCode === this.props.letter.charCodeAt()) {
        /*    this.audio.play()
                                                                   this.audio.currentTime = 0
                                                                   this.props.handleDisplay(this.props.id) */
        this.handleClick(); // can just redirect to this.handleClick()
      }
    }

    // this handleClick is for when using mouse to click
  }, { key: 'handleClick', value: function handleClick() {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    } }, { key: 'render', value: function render()

    {var _this2 = this;
      return (
        this.props.power ?
        React.createElement('div', { className: 'drum-pad', id: this.props.letter, onClick: this.handleClick },
          React.createElement('h3', { className: 'poweron-buttonglow' }, this.props.letter),
          React.createElement('audio', {
            src: this.props.src,
            className: 'clip',
            id: this.props.letter,
            ref: function ref(s) {return _this2.audio = s;} // needed to connect the button div to the audio
          })) :



        React.createElement('div', { className: 'drum-pad', id: this.props.letter, onClick: this.handleClick },
          React.createElement('h3', { className: 'poweroff-buttonfade' }, this.props.letter),
          React.createElement('audio', {
            src: '#',
            className: 'clip',
            id: this.props.letter,
            ref: function ref(s) {return _this2.audio = s;} // needed to connect the button div to the audio
          })));




    } }]);return DrumPad;}(React.Component);var




App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this3.state = {
      display: 'Press a Key',
      sliderVal: 50,
      power: true,
      bank: true,
      currentBank: bankOne };

    _this3.handleDisplay = _this3.handleDisplay.bind(_this3);
    _this3.adjustVolume = _this3.adjustVolume.bind(_this3);
    _this3.powerControl = _this3.powerControl.bind(_this3);
    _this3.selectBank = _this3.selectBank.bind(_this3);return _this3;
  }_createClass(App, [{ key: 'powerControl', value: function powerControl()

    {
      this.setState({
        power: !this.state.power });

    } }, { key: 'selectBank', value: function selectBank()

    {
      if (this.state.power) {
        this.state.currentBank === bankOne ?
        this.setState({
          currentBank: bankTwo,
          bank: !this.state.bank }) :

        this.setState({
          currentBank: bankOne,
          bank: !this.state.bank });

      }
    } }, { key: 'handleDisplay', value: function handleDisplay(

    soundname) {
      if (this.state.power) {
        this.setState({
          display: soundname });

      }
    } }, { key: 'adjustVolume', value: function adjustVolume(

    e) {
      if (this.state.power) {
        this.setState({
          sliderVal: e.target.value });

      }
    } }, { key: 'render', value: function render()



    {var _this4 = this;

      var powerSwitch = this.state.power ? {
        color: 'limegreen' } :
      {
        color: 'red' };


      var bankSwitch = this.state.bank ? {
        color: 'royalblue' } :
      {
        color: 'midnightblue' };


      var displayScreen = this.state.power ? {
        transition: 'color 500ms linear' } :
      {
        color: '#5f8c8e',
        backgroundColor: '#5f8c8e',
        backgroundImage: 'linear-gradient(to right, #5f8c8e, teal)',
        border: 'none',
        transition: 'color 1200ms linear' };


      var displayScreenBank = this.state.power ? {
        transition: 'color 500ms linear' } :
      {
        color: '#5f8c8e',
        backgroundColor: '#5f8c8e',
        backgroundImage: 'linear-gradient(to right, #2d8387, teal)',
        border: 'none',
        transition: 'color 1200ms linear' };

      var displayScreenPower = this.state.power ? {
        transition: 'color 500ms linear' } :
      {
        color: '#5f8c8e',
        backgroundColor: '#5f8c8e',
        backgroundImage: 'linear-gradient(to right, #5f8c8e, #2d8387)',
        border: 'none',
        transition: 'color 1200ms linear' };




      {
        var clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(function (thesound) {
          thesound.volume = _this4.state.sliderVal / 100; // divide 100 becos .volume takes value of 0 to 1
        });
      }





      return (
        React.createElement('div', { id: 'drum-machine' },

          React.createElement('div', { className: 'panel' },
            React.createElement('div', { id: 'display', style: displayScreen }, this.state.display),

            React.createElement('div', { className: 'power-display', style: displayScreenPower }, this.state.power === true ? 'Power On' : 'Power Off'),

            React.createElement('div', { className: 'bank-display', style: displayScreenBank }, this.state.bank === true ? 'Bank 1' : 'Bank 2'),

            React.createElement('div', { className: 'volumedisplay', style: displayScreen }, 'Volume:\xA0', React.createElement('span', { id: 'demo' }, this.state.sliderVal)),

            React.createElement('div', { className: 'slidecontainer' },

              React.createElement('input', { type: 'range', min: '1', max: '100', value: this.state.sliderVal, onChange: this.adjustVolume, className: 'slider', id: 'myRange' })),



            React.createElement('div', { id: 'brand' }, 'JukeBox')),


          React.createElement('div', { className: 'power', onClick: this.powerControl, style: powerSwitch }, React.createElement('span', null, 'Power ', React.createElement('i', { 'class': 'fa fa-power-off' }))),


          React.createElement('div', { className: 'bankbutton', onClick: this.selectBank, style: bankSwitch }, React.createElement('span', null, 'Bank')),



          this.state.currentBank === bankOne &&
          React.createElement('div', { className: 'pad-bank' },
            bankOne.map(function (d) {return (
                React.createElement(DrumPad, {
                  power: _this4.state.power // needed for DrumPad this.props.power condition
                  , id: d.id,
                  src: d.src,
                  letter: d.letter,
                  handleDisplay: _this4.handleDisplay }));})),





          this.state.currentBank === bankTwo &&
          React.createElement('div', { className: 'pad-bank' },
            bankTwo.map(function (d) {return (
                React.createElement(DrumPad, {
                  power: _this4.state.power // needed for DrumPad this.props.power condition
                  , id: d.id,
                  src: d.src,
                  letter: d.letter,
                  handleDisplay: _this4.handleDisplay }));}))));








    } }]);return App;}(React.Component);
;

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));