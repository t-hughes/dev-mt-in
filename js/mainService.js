angular.module('socialInternApp').service('mainService', function() {

    var userResults = [{
        'name': 'Elliot Alderson',
        'tagline': 'Please, tell me you are seeing this, too.',
        'profileUrl': 'http://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2016/07/mrrobot_s2_cast_rami-malek2.jpg?itok=xdvYQrLy',
        'bio': 'I\'m only a vigilante hacker by night. By day, just a regular cybersecurity engineer. Employee number ER28-0652. I hack everyone.',
        'friends': '[friendId]'
    }, {
        'name': 'Gary Vaynerchuck',
        'tagline': 'Get Shit Done',
        'profileUrl': 'http://therebelsociety.com/wp-content/uploads/2015/10/GaryVaynerchukBWFinal_1_of_1_20.jpg',
        'bio': 'My store, Wine Library, outsells big national chains. How do you think we do it? It started with hustle. I always say that our success wasn\'t due to my hundreds of online videos about wine that went viral, but to the hours I spent talking to people online afterward, making connections and building relationships.',
        'friends': '[friendId]'
    }, {
        'name': 'Eleven',
        'tagline': 'Don\'t be a Mouth Breather',
        'profileUrl': 'https://images.hellogiggles.com/uploads/2016/07/28082050/strangerthings.jpg',
        'bio': 'Eggos. pu-tt-ing? Friends don\'t lie. Still pretty? The Upside Down. The gate... I opened it... I\'m the monster. Demagorgon.',
        'friends': '[friendId]'
    }, {
        'name': 'William Wallace',
        'tagline': 'Freeeeeeedom!!',
        'profileUrl': 'http://o.aolcdn.com/hss/storage/midas/c3ec35cf585e3cb9e654f6f6b30d22dd/202031606/Braveheart_660x350.jpg',
        'bio': 'Aye, fight and you may die. Run, and you\'ll live... at least a while. And dying in your beds, many years from now, would you be willin\' to trade ALL the days, from this day to that, for one chance, just one chance, to come back here and tell our enemies that they may take our lives, but they\'ll never take... OUR FREEDOM!',
        'friends': '[friendId]'
    }, {
        'name': 'Ender Wiggin',
        'tagline': 'Dragon Army',
        'profileUrl': 'http://th07.deviantart.net/fs71/PRE/f/2013/272/3/c/enderart03_by_runewolfe-d6oghpp.jpg',
        'bio': 'In the moment when I truly understand my enemy, understand him well enough to defeat him, then in that very moment I also love him. I think it\'s impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves. And then, in that very moment when I love them I destroy them. I make it impossible for them to ever hurt me again. I grind them and grind them until they don\'t exist.',
        'friends': '[friendId]'
    }, {
        'name': 'R2D2',
        'tagline': 'BEEPBOOPBEPP',
        'profileUrl': 'https://i.guim.co.uk/img/media/52c8d479da99c4fdcf6ed85817c2fbf308070a9d/0_77_2745_1647/2745.jpg?w=460&q=55&auto=format&usm=12&fit=max&s=c8bf15787e51ba8caaf6f69e8ddcfe7d',
        'bio': 'I am here for the girls. Check out my new thrusters. Got them with 2-day free shipping on Amazon Prime. Written with the help of Luke.'
    }];
    this.getUserResults = function() {
        return userResults;
    };
});