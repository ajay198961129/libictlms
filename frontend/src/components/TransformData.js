import React from "react";

function TransformData({ data }) {
  // Step 1: Group by chapter
  const transformedData = data.reduce((acc, item) => {
    const chapterTitle = item.chapter.title;

    // Find if the chapter already exists in the accumulator
    const chapterIndex = acc.findIndex((chap) => chap.chapter === chapterTitle);

    if (chapterIndex >= 0) {
      // Chapter already exists, so add to its contentData array
      acc[chapterIndex].contentData.push({
        contentTitle: item.title,
      });
    } else {
      // Chapter does not exist, so create a new entry
      acc.push({
        chapter: chapterTitle,
        contentData: [{ contentTitle: item.title }],
      });
    }

    return acc;
  }, []);
  return (
    <div>
      {transformedData.map((chapter, index) => (
        <div className="course-content-wraper" key={index}>
          <div className="course-content-item">
            <h3>{chapter.chapter}</h3>
            <ol>
              {chapter.contentData.map((content, idx) => (
                <li key={idx}>{content.contentTitle}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransformData;
