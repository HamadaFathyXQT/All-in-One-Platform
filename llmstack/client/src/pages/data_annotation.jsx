import React from 'react';


export default function LabelStudioIntegration({ userToken }) {
  const labelStudioUrl = `http://localhost:7070/projects?token=${userToken}`; // Replace with your Label Studio URL
  return (
    <div style={{ padding: '20px' }}>
      <iframe 
        src="http://localhost:8081/projects" // Adjust this URL based on your setup
        style={{ width: '100%', height: '800px', border: 'none' }}
        title="CNTXT"
      ></iframe>
    </div>
  );
}

///////// integrating label studio frontend /////////////

// import React, { useEffect, useRef } from 'react';
// import LabelStudio from "label-studio";
// import 'label-studio/build/static/css/main.css';
// import { LabelStudioReact } from '../components/DataAnnotate'

// export default function DataAnnotationPage() {
//   const labelStudioRef = useRef(null);

//   useEffect(() => {
//     if (labelStudioRef.current) {
//       // Initialize Label Studio
//       new LabelStudio(labelStudioRef.current, {
//         config: `
//           <View>
//             <Image name="img" value="$image"></Image>
//             <RectangleLabels name="tag" toName="img">
//               <Label value="Hello"></Label>
//               <Label value="World"></Label>
//             </RectangleLabels>
//           </View>
//         `,
//         interfaces: [
//           "panel",
//           "update",
//           "submit",
//           "controls",
//           "side-column",
//           "annotations:menu",
//           "annotations:add-new",
//           "annotations:delete",
//           "predictions:menu",
//         ],
//         user: {
//           pk: 1,
//           firstName: "James",
//           lastName: "Dean"
//         },
//         task: {
//           annotations: [],
//           predictions: [],
//           id: 1,
//           data: {
//             image: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg"
//           }
//         },
//         onLabelStudioLoad: function(LS) {
//           var c = LS.annotationStore.addAnnotation({
//             userGenerate: true
//           });
//           LS.annotationStore.selectAnnotation(c.id);
//         }
//       });
//     }
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Data Annotation</h1>
//       {/* Add your content here */}
//       <div ref={labelStudioRef}></div>
//     </div>
//   );
// }


//////////////// URL redirection ///////////////
// export default function DataAnnotationPage() {
//   const handleCreateAnnotationsClick = () => {
//     // Redirect to the specified URL
//     window.location.href = 'http://localhost:8080/projects';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Data Annotation</h1>
//       <button onClick={handleCreateAnnotationsClick} style={{ margin: '10px', padding: '10px' }}>
//         Create Annotations
//       </button>
//       {/* Add your content here */}
//     </div>
//   );
// }

