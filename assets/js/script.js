var currentSelection = 1;

function changeMainImage(newSelection, totalSelections, page) {
    var headerElement = document.getElementById("main-header");
    var headerXSElement = document.getElementById("main-header-xs");
    var infoElement = document.getElementById("main-info");
    var infoXSElement = document.getElementById("main-info-xs");
    var imageElement = document.getElementById("main-image-element");
    var imageElementXS = document.getElementById("main-image-element-xs");
    var navButtonRight=document.getElementById("navbutton-right1");
    var navButtonLeft=document.getElementById("navbutton-left1");
    var thumbnailElement;
    var newImage;
    var newHeader;
    var newInfo;
    //left arrow clicked check if at the end of the row, if so set the selection to 1 (i.e first and current image)
    //else reduce by one
    if(newSelection==-1) {
        if (currentSelection > 1) {
            newSelection = currentSelection - 1;
        }    
        else {
            newSelection = 1;
        }
    }

    //right arrow clicked check if at right end of row, if so set selection to the maximum (i.e last and current image)
    //else increase by 1

    if(newSelection==6) {
        if (currentSelection <totalSelections) {
            newSelection = currentSelection + 1;
        }    
        else {
            newSelection = totalSelections;
        }
    }

    //hide or show navigation buttons if selection is at end of row 
    var i=1;
    if(newSelection==1) {
        while(navButtonLeft!=null) {
            navButtonLeft.style.visibility="hidden";
            i++;
            navButtonLeft=document.getElementById("navbutton-left"+i)
        }
    }
    else if(newSelection==totalSelections) {
        while(navButtonRight!=null) {
            navButtonRight.style.visibility="hidden";
            i++;
            navButtonRight=document.getElementById("navbutton-right"+i)
        }      
    }
    else {
        while(navButtonLeft!=null) {
            navButtonLeft.style.visibility="visible";
            i++;
            navButtonLeft=document.getElementById("navbutton-left"+i)
        }
        i=1;
        while(navButtonRight!=null) {
            navButtonRight.style.visibility="visible";
            i++;
            navButtonRight=document.getElementById("navbutton-right"+i)
        }  
    }

    
    //determine new values for the image, header and text
    if (page == "band") {
        switch (newSelection) {
            case 1:
                newHeader = "The Band";
                newInfo = "The Monkees are an American rock and pop band originally active between 1966 and 1971, with reunion albums and tours in the decades that followed. They were formed in Los Angeles in 1965 by Bob Rafelson and Bert Schneider for the American television series The Monkees.";
                newImage = "assets/images/band2.jpg";
                break;
            case 2:
                newHeader = "Davy Jones";
                newInfo = "The lead vocalist for the Monkees who also took the lead in the 1970s TV series 'The Monkees'. Davy's TV debut was on Coronation street in 1961.";
                newImage = "assets/images/dj.jpg";
                break;
            case 3:
                newHeader = "Micky Dolenz";
                newInfo = "The vocalist and drummer and also actor, television director, radio personality and theatre director. Micky started his musical career in his own band, 'Micky and the One-Nighters' and went on to co-star in the TV series 'The Monkees'.";
                newImage = "assets/images/md.jpg";
                break;
            case 4:
                newHeader = "Michael Nesmith";
                newInfo = "Bass player and co-star of the TV series 'The Monkees'. He is a songwriter, actor, producer, novelist, businessman and philanthropist. His song writing credits include 'Different Drum'.";
                newImage = "assets/images/mn.jpg";
                break;
            case 5:
                newHeader = "Peter Tork";
                newInfo = "Lead guitar and co-star of the TV series 'The Monkees'. He described himself as playing 'third chair guitar'. Recording and producing as a group was Tork's major interest.";
                newImage = "assets/images/pt.jpg";
                break;
        }
    }
    else if (page == "music") {
        switch (newSelection) {
            case 1:
                newHeader = "Daydream Believer";
                newInfo = "Oh, I could hide 'neath the wings<br>Of the bluebird as she sings<br>The six-o'clock alarm would never ring<br>But six rings and I rise<br>Wipe the sleep out of my eyes<br>The shaving razor's cold and it stings<br>Cheer up sleepy Jean<br>Oh, what can it mean to a<br>Daydream believer and a<br>Homecoming queen?<br>You once thought of me<br>As a white knight on his steed<br>Now you know how happy I can be<br>Oh, our good time starts and ends<br>Without all I want to spend<br>But how much, baby, do we really need?<br>Cheer up sleepy Jean<br>Oh, what can it mean to a<br>Daydream believer and a<br>Homecoming queen?…";
                newImage = "https://c1.staticflickr.com/3/2940/14584768909_a011486ce1_b.jpg";
                break;
            case 2:
                newHeader = "Clarksville";
                newInfo = "Take the last train to Clarksville<br>And I'll meet you at the station<br>You can be there by four-thirty<br>'Cause I've made your reservation, don't be slow<br>Oh, no, no, no<br>Oh, no, no, no<br>'Cause I'm leaving in the morning<br>And I must see you again<br>We'll have one more night together<br>Till the morning brings my train and I must go<br>Oh, no, no, no<br>Oh, no, no, no<br>And I don't know if I'm ever coming home<br>Take the last train to Clarksville<br>I'll be waiting at the station<br>We'll have time for coffee-flavored kisses<br>And a bit of conversation<br>Oh, no, no, no<br>Oh, no, no, no<br>Take the last train to Clarksville<br>Now I must hang up the phone<br>I can't hear you in this noisy railroad station all alone<br>I'm feeling low<br>Oh, no, no, no<br>Oh, no, no, no<br>And I don't know if I'm ever coming home<br>Oh<br>Take the…";
                newImage = "assets/images/album1.jpg";
                break;
            case 3:
                newHeader = "I'm A Believer";
                newInfo = "I thought love was only true in fairy tales<br>Meant for someone else but not for me<br>Love was out to get me<br>That's the way it seemed<br>Disappointment haunted all of my dreams<br>Then I saw her face, now I'm a believer<br>Not a trace, of doubt in my mind<br>I'm in love, and I'm a believer<br>I couldn't leave her if I tried<br>I thought love was more or less a giving thing<br>The more I gave the less I got oh yeah<br>What's the use in tryin'<br>All you get is pain<br>When I wanted sunshine I got rain<br>Then I saw her face, now I'm a believer<br>Not a trace, of doubt in my mind<br>I'm in love, I'm a believer<br>I couldn't leave her if I tried<br>What's the use of trying<br>All you get is pain<br>When I wanted sunshine I got rain<br>Then I…";
                newImage = "assets/images/album2.jpg";
                break;
            case 4:
                newHeader = "Stepping Stone";
                newInfo = "I-I-I-I-I'm not your steppin' stone<br>I-I-I-I-I'm not your steppin' stone<br>You're trying to make your mark in society<br>You're using all the tricks that you used on me<br>You're reading all them high-fashion magazines<br>The clothes you're wearing, girl, they're causing public scenes<br>I said, I-I-I-I-I'm not your steppin' stone<br>I-I-I-I-I'm not your steppin' stone<br>Not your steppin' stone<br>Not your steppin' stone<br>When I first met you, girl, you didn't have no shoes<br>But, now you're walking around like you're front-page news<br>You've been awful careful 'bout the friends you choose<br>But, you won't find my name in your book of 'who's-who?'<br>I said, I-I-I-I-I'm not your steppin' stone<br>(No, girl, not me!)<br>I-I-I-I-I'm not your steppin' stone<br>Not your steppin' stone<br>I'm not…";
                newImage = "assets/images/album3.jpg";
                break;
        }
    }
    else if (page == "booking") {
        switch (newSelection) {
            case 1:
                newHeader = "Events";
                newInfo = "We are available to perform at a variety of events including weddings, corporate events and Christmas parties.<br>Click right for more information, or contact us now for a quote.";
                newImage = "assets/images/events.jpg";
                break;
            case 2:
                newHeader = "Weddings";
                newInfo = "Give your wedding that 60s vibe. Get your guests out on the dance floor rocking to our greatest hits! 'I'm A Believer', 'Stepping Stone' and more.<br>Contact us now for a quote.";
                newImage = "https://c.pxhere.com/photos/7a/cc/flower_wedding_rose_love_venue-143470.jpg!d";
                break;
            case 3:
                newHeader = "Corporate Events";
                newInfo = "Your clients and staff will love swinging 60s themed events. Reminiscing in retro style with our greatest hits!<br>Contact us now for a quote.";
                newImage = "https://c.pxhere.com/photos/50/a1/table_table_setting_conference_meeting_corporate_meeting_business_meeting_conference_room_office_meeting-653215.jpg!d";
                break;
            case 4:
                newHeader = "Christmas Parties";
                newInfo = "Nothing is better than rocking around the Christmas tree, 60s style!<br>Contact us now for a quote.";
                newImage = "https://c.pxhere.com/images/8d/a9/b1b8ea2f9f76ce0fa2b51ff48399-1418247.jpg!d";
                break;
        }
    }
    else if (page == "fans") {
        switch (newSelection) {
            case 1:
                newHeader = "Tour Dates";
                newInfo = "<strong>5 March 2019</strong> Red Bank, NJ - Count Basie Centre for the Arts<br><strong>8 March 2019</strong> Huntington, NY - The Paramount<br><strong>9 March 2019</strong> New York, NY Beacon Theatre<br><br>Find more fan material <i class='fa fa-arrow-right rainbow-text-red'></i>";
                newImage = "https://c.pxhere.com/photos/3a/fc/concert_person_hand_fan_party-8303.jpg!d";
                break;
            case 2:
                newHeader = "Follow us";
                newInfo = "<a target='_blank' href='#'><i class='fa fa-facebook-square rainbow-text-red'></i></a> Facebook<br><a target='_blank' href='#'><i class='fa fa-twitter-square rainbow-text-yellow'></i></a> Twitter<br><a target='_blank' href='#'><i class='fa fa-youtube-square rainbow-text-green'></i></a> YouTube<br><a target='_blank' href='#'><i class='fa fa-share-square rainbow-text-orange'></i></a> Share<br><br><i class='fa fa-arrow-left rainbow-text-red'></i> Find more fan material <i class='fa fa-arrow-right rainbow-text-red'></i>";
                newImage = "assets/images/band-small.jpg";
                break;
            case 3:
                newHeader = "Download";
                newInfo = "Download 'The Monkees' wallpaper, artwork, videos and more:<br><a target='_blank' href='#'><span class='glyphicon glyphicon-picture rainbow-text-yellow'></span></a> Wallpaper<br><a target='_blank' href='assets/videos/daydream.webm'><span class='glyphicon glyphicon-film rainbow-text-red'></span></a> Video<br><a target='_blank' href='#'><span class='glyphicon glyphicon-music rainbow-text-green'></span></a> Music<br><br><i class='fa fa-arrow-left rainbow-text-red'></i> Find more fan material";
                newImage = "assets/images/band-small.jpg";
                break;
        }
    }


    //update the page
    headerElement.innerHTML = newHeader;
    headerXSElement.innerHTML = newHeader;
    infoElement.innerHTML = newInfo;
    infoXSElement.innerHTML = newInfo;
    imageElement.src = newImage;
    imageElementXS.src = newImage;

    //change the border of the selected element to blue - change the old to red
    if (page != "booking" && page!= "fans") {
        document.getElementById("thumbnail-" + currentSelection).classList = "middle-section-thumbnail rainbow-border-red";
        document.getElementById("thumbnail-" + newSelection).classList = "middle-section-thumbnail rainbow-border-blue";
    }
    //on the music page stop the current playing music when a different song is selected
    if (page == "music" && (currentSelection!=newSelection)) {
        playPause(newSelection, page);
    }

    //Update the current selection to new selection
    currentSelection = newSelection;
    //jump back to top of page (for mobile versions)
    window.scrollTo(0, 0);
}


var playing = 0;

function playPause(track, page) {
    var playButton = document.getElementById("playButton");
    var playButtonXS = document.getElementById("playButton-xs");

    var songElement = document.getElementById("song");
    var i = 0;
    
    /* play button passes 0 to playpause so set playing track to current selection */
    if(track==0) {
        track=currentSelection;
    }

    /*check if the current track is already playing, if it is stop it, and change the source */
    if (playing == 0 || (track!=currentSelection)) {
        var song;
        if (page == "music") {
            switch (track) {
                case 1:
                    song = "assets/audio/daydreambeliever.mp3";
                    break;
                case 2:
                    song = "assets/audio/clarksville.mp3";
                    break;
                case 3:
                    song = "assets/audio/imabeliever.mp3";
                    break;
                case 4:
                    song = "assets/audio/steppingstone.mp3";
                    break;
            }
        }
        else if (page == "index") {
            //stop the video playing, if it is 
            document.getElementById('video-background').pause();
            switch (track) {
                case 1:
                    song = "assets/audio/clarksville.mp3";
                    break;
                case 2:
                    song = "assets/audio/imabeliever.mp3";
                    break;
                case 3:
                    song = "assets/audio/steppingstone.mp3";
                    break;
                case 4:
                    song = "assets/audio/daydreambeliever.mp3";
                    break;
            }
        }
        
        currentSelection=track;
        songElement.src = song;
        songElement.play();

        if (page == "music") {
            //change the playbutton
            playButton.classList = "fa fa-stop-circle rainbow-text-red";
            playButtonXS.classList = "fa fa-stop-circle rainbow-text-red";
        }
        else if (page == "index") {
            document.getElementById("playButton" + track).classList = "fa fa-stop-circle rainbow-text-red";
            //cycle through the 4 play buttons and change them to play
            for (i = 1; i <= 4; i++) {
                if (i != track) {
                    document.getElementById("playButton" + i).classList = "fa fa-play-circle rainbow-text-red";
                }
            }
        }
        playing = 1;
    }
    else {
        /* pause the track and change the button icon */
        songElement.pause();
        playing = 0;

        if (page == "music") {
            playButton.classList = "fa fa-play-circle rainbow-text-red";
            playButtonXS.classList = "fa fa-play-circle rainbow-text-red";
        }
        else if (page == "index") {
            document.getElementById("playButton" + track).classList = "fa fa-play-circle rainbow-text-red";
        }
    }
}