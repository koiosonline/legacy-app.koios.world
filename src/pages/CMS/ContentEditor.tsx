import { useEffect, useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { Icon } from '../../components/Util/Icon';
import { useParams } from 'react-router-dom';
import { getVideoInfo, getLiterature } from '../../api/Api';
import { SingleVideo } from '../../types/Courses/SingleVideo';
import { CourseContentParams, CourseDetailParams, VideoSlugParams } from '../../types/Params';
import { FindCourseDetail } from '../WorldDetail/useWorldDetail';
import { Slugify } from '../../components/Util/Slugify';
import courseInfo from '../../assets/data/Worlds.json';
import Loading from '../../components/Loading';

export const ContentEditor = () => {
  const [editorInput, setEditorInput] = useState<string>('');

  const { worldContent, worldDetail, videoSlug } = useParams<
    CourseContentParams & CourseDetailParams & VideoSlugParams
  >();

  const [videoContent, setVideoContent] = useState<SingleVideo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [courseData, setCourseData] = useState<any[]>();
  const [videoList, setVideoList] = useState<any[]>();
  const [extraInfo, setExtraInfo] = useState<any[]>();
  const [quizState, setQuizState] = useState<boolean>(false);


  const course = courseInfo.find(
    (item) => Slugify(item.url, { lowerCase: true, replaceAmpersand: 'and' }) === worldContent
  );

  const courseLevel = course.content.find(
    (item) => Slugify(item.title, { lowerCase: true, replaceAmpersand: 'and' }) === worldDetail
  );

  const fetchEditorData = async () => {
    setIsLoading(true);
    const d = await FindCourseDetail(videoSlug, courseLevel.videoInfo);
    setVideoContent(d);
    const getVideoList = await getVideoInfo(courseLevel.videoInfo);
    setExtraInfo(getVideoList.literature);
    setVideoList(getVideoList.videos);
    const literature = await getLiterature({
      world: worldContent,
      worldLevel: worldDetail,
      article: videoSlug?.replace('#', '') + '.md',
    });
    setEditorInput(literature);
    const getCourseData = await getVideoInfo(courseLevel.data);
    setCourseData(getCourseData);
    console.log('done loading', getVideoList);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchEditorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSlug, worldDetail]);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="worlds__title">Content editor</h1>

          <main className="main content-editor-container">

            <div className='flex--row justify--center gap--3 mt--1'>
              <button className='btn-primary'>Upload to IPFS</button>
              <button className='btn-primary'>Upload to Github</button>
              <button className='btn-primary'>Save to disk</button>
            </div>

            <section className="markdown-editor">
              {/* Buttons, e.g., github publish goes here */}

              <div className="editor__window">
                <MDEditor
                  value={editorInput}
                  onChange={setEditorInput}
                  height={500}
                  commands={[
                    // text manipulation commands
                    commands.group(
                      [
                        commands.title1,
                        commands.title2,
                        commands.title3,
                        commands.title4,
                        commands.title5,
                        commands.title6,
                      ],
                      {
                        name: 'title',
                        groupName: 'title',
                        buttonProps: { 'aria-label': 'Insert title' },
                        icon: <Icon type="heading" />,
                      }
                    ),
                    commands.bold,
                    commands.italic,
                    commands.strikethrough,
                    commands.hr,
                    commands.divider,
                    // insertion tools
                    commands.link,
                    commands.quote,
                    commands.codeBlock,
                    commands.image,
                    commands.divider,
                    // list creation
                    commands.unorderedListCommand,
                    commands.orderedListCommand,
                    commands.checkedListCommand,
                  ]}
                />
              </div>
            </section>

            <section>
              <h2>Video details</h2>
              <div className="labeled-input-container">
                <h3 className="label">URL:</h3>
                <input />
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
};
