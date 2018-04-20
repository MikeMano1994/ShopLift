// Documentation: https://www.npmjs.com/package/react-grid-gallery
// Images: https://imgur.com/a/eB02F

// Alternative Grid to use: https://www.npmjs.com/package/react-native-image-grid

import React, {Component} from 'react';
import {render} from 'react-dom';
import Gallery from 'react-grid-gallery';

export default class PopItems extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <p>The gallery doesn't show unless there is text here. IDK why.
            <Gallery images={IMAGES} margin={5} maxRows={2} enableLightbox={false}
                    enableImageSelection={false}/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const IMAGES =
    [{
        src: "https://i.imgur.com/Rp2GnD2.jpg",
        thumbnail: "https://i.imgur.com/Rp2GnD2.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 270,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
        {
            src: "https://i.imgur.com/rtqcG5q.jpg",
            thumbnail: "https://i.imgur.com/rtqcG5q.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 270,
            //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
            src: "https://i.imgur.com/cbbGSGK.jpg",
            thumbnail: "https://i.imgur.com/cbbGSGK.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 270
        },
        {
            src: "https://i.imgur.com/SD1yKye.jpg",
            thumbnail: "https://i.imgur.com/SD1yKye.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 270,
            isSelected: false,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://i.imgur.com/m2rgBZA.jpg",
            thumbnail: "https://i.imgur.com/m2rgBZA.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 270,
            //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
            src: "https://i.imgur.com/W3Ew3HY.jpg",
            thumbnail: "https://i.imgur.com/W3Ew3HY.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 270
        }]
