"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
// import images from "../../../images";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});



const ECommerce: React.FC = () => {
  const [displayImage, setDisplayImage] = useState<string>("");


  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Patients waiting" total="2" rate="0.43%" levelUp>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgYXJ0Y29ob2xpYzogaHR0cHM6Ly9naXRodWIuY29tL2FydGNvaG9saWMvYWthci1pY29ucyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI1IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTcgMTRIMTcuMzUxN0MxOC44NjQ2IDE0IDIwLjE0MDggMTUuMTI2NiAyMC4zMjg1IDE2LjYyNzlMMjAuNzE5IDE5Ljc1MTlDMjAuODY4MiAyMC45NDU2IDE5LjkzNzQgMjIgMTguNzM0NCAyMkg1LjI2NTU2QzQuMDYyNTcgMjIgMy4xMzE4IDIwLjk0NTYgMy4yODEwMSAxOS43NTE5TDMuNjcxNTEgMTYuNjI3OUMzLjg1OTE3IDE1LjEyNjYgNS4xMzUzOCAxNCA2LjY0ODM1IDE0SDciIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+" />
        </CardDataStats>
        <CardDataStats title="Doctors Available" total="1" rate="4.35%" levelUp>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KCjwhLS0gTGljZW5zZTogUEQuIE1hZGUgYnkgbWFwYm94OiBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21ha2kgLS0+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgaWQ9ImRvY3RvciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNS41LDdDNC4xMTkzLDcsMyw1Ljg4MDcsMyw0LjVsMCwwdi0yQzMsMi4yMjM5LDMuMjIzOSwyLDMuNSwySDRjMC4yNzYxLDAsMC41LTAuMjIzOSwwLjUtMC41UzQuMjc2MSwxLDQsMUgzLjUmI3hBOyYjeDk7QzIuNjcxNiwxLDIsMS42NzE2LDIsMi41djJjMC4wMDEzLDEuMTQ2NiwwLjU2NTgsMi4yMTk1LDEuNTEsMi44N2wwLDBDNC40MTMxLDguMTY2Miw0Ljk1MTQsOS4yOTcsNSwxMC41QzUsMTIuNDMzLDYuNTY3LDE0LDguNSwxNCYjeEE7JiN4OTtzMy41LTEuNTY3LDMuNS0zLjVWOS45M2MxLjA2OTUtMC4yNzYxLDEuNzEyNi0xLjM2NywxLjQzNjUtMi40MzY1QzEzLjE2MDMsNi40MjQsMTIuMDY5NSw1Ljc4MDksMTEsNi4wNTcmI3hBOyYjeDk7QzkuOTMwNSw2LjMzMzIsOS4yODc0LDcuNDI0LDkuNTYzNSw4LjQ5MzVDOS43NDU0LDkuMTk4LDEwLjI5NTUsOS43NDgxLDExLDkuOTN2MC41N2MwLDEuMzgwNy0xLjExOTMsMi41LTIuNSwyLjVTNiwxMS44ODA3LDYsMTAuNSYjeEE7JiN4OTtjMC4wNTExLTEuMjA0NSwwLjU5MzItMi4zMzU2LDEuNS0zLjEzbDAsMEM4LjQ0MDQsNi43MTcyLDkuMDAxLDUuNjQ0OCw5LDQuNXYtMkM5LDEuNjcxNiw4LjMyODQsMSw3LjUsMUg3JiN4QTsmI3g5O0M2LjcyMzksMSw2LjUsMS4yMjM5LDYuNSwxLjVTNi43MjM5LDIsNywyaDAuNUM3Ljc3NjEsMiw4LDIuMjIzOSw4LDIuNXYybDAsMEM4LDUuODgwNyw2Ljg4MDcsNyw1LjUsNyBNMTEuNSw5JiN4QTsmI3g5O2MtMC41NTIzLDAtMS0wLjQ0NzctMS0xczAuNDQ3Ny0xLDEtMXMxLDAuNDQ3NywxLDFTMTIuMDUyMyw5LDExLjUsOXoiLz4KPC9zdmc+" />
        </CardDataStats>
        <CardDataStats title="Nurses Available" total="2" rate="2.59%" levelUp>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBMaWNlbnNlOiBDQyBBdHRyaWJ1dGlvbi4gTWFkZSBieSBlcml4IHN1YnlhcmtvOiBodHRwczovL21vYmlsZS50d2l0dGVyLmNvbS9lcml4X2Fya28gLS0+CjxzdmcgZmlsbD0iIzAwMDAwMCIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTkuNzMxLDE0LjA3NWMtMS4zODcsMC4yNTIgLTIuNjc2LDAuOTIxIC0zLjY4NywxLjkzMmMtMS4zMDksMS4zMDkgLTIuMDQ0LDMuMDg0IC0yLjA0NCw0LjkzNWwwLDQuMDM5YzAsMS42NTcgMS4zNDMsMyAzLDNjNC4xODQsLTAgMTMuODE2LC0wIDE4LC0wYzEuNjU3LC0wIDMsLTEuMzQzIDMsLTNsMCwtNC4wMzljMCwtMS44NTEgLTAuNzM1LC0zLjYyNiAtMi4wNDQsLTQuOTM1Yy0xLjAxMSwtMS4wMTEgLTIuMywtMS42OCAtMy42ODcsLTEuOTMyYzAuNDY4LC0wLjkzOSAwLjczMSwtMS45OTcgMC43MzEsLTMuMTE3YzAsLTMuODYzIC0zLjEzNywtNyAtNywtN2MtMy44NjMsMCAtNywzLjEzNyAtNyw3YzAsMS4xMiAwLjI2MywyLjE3OCAwLjczMSwzLjExN1ptMTEuMTY5LDEuODhjLTEuMjYyLDEuMjM5IC0yLjk5MywyLjAwMyAtNC45LDIuMDAzYy0xLjkwNywwIC0zLjYzOCwtMC43NjQgLTQuOSwtMi4wMDNjLTAuMDQsMC4wMDUgLTAuMDgsMC4wMDcgLTAuMTIsMC4wMDdjLTEuMzIxLDAgLTIuNTg4LDAuNTI1IC0zLjUyMSwxLjQ1OWMtMC45MzQsMC45MzQgLTEuNDU5LDIuMjAxIC0xLjQ1OSwzLjUyMWMwLDAgMCw0LjAzOSAwLDQuMDM5YzAsMC41NTIgMC40NDgsMSAxLDFsMTgsLTBjMC41NTIsLTAgMSwtMC40NDggMSwtMWMtMCwtMCAwLC00LjAzOSAwLC00LjAzOWMwLC0xLjMyIC0wLjUyNSwtMi41ODcgLTEuNDU5LC0zLjUyMWMtMC45MzMsLTAuOTM0IC0yLjIsLTEuNDU5IC0zLjUyMSwtMS40NTljLTAuMDQsMCAtMC4wOCwtMC4wMDIgLTAuMTIsLTAuMDA3Wm0tNC45LC05Ljk5N2MyLjc2LDAgNSwyLjI0MSA1LDVjMCwyLjc2IC0yLjI0LDUgLTUsNWMtMi43NiwwIC01LC0yLjI0IC01LC01YzAsLTIuNzU5IDIuMjQsLTUgNSwtNVoiLz48cGF0aCBkPSJNMjAsMjAuMDA4bC0xLC0wYy0wLjU1MiwtMCAtMSwwLjQ0OCAtMSwxYy0wLDAuNTUyIDAuNDQ4LDEgMSwxbDEsLTBsMCwxYy0wLDAuNTUyIDAuNDQ4LDEgMSwxYzAuNTUyLC0wIDEsLTAuNDQ4IDEsLTFsMCwtMWwxLC0wYzAuNTUyLC0wIDEsLTAuNDQ4IDEsLTFjLTAsLTAuNTUyIC0wLjQ0OCwtMSAtMSwtMWwtMSwtMGwwLC0xYy0wLC0wLjU1MiAtMC40NDgsLTEgLTEsLTFjLTAuNTUyLC0wIC0xLDAuNDQ4IC0xLDFsMCwxWiIvPjwvc3ZnPg==" />
        </CardDataStats>
        <CardDataStats title="Beds Available" total="1" rate="0.95%" levelDown>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBMaWNlbnNlOiBDQyBBdHRyaWJ1dGlvbi4gTWFkZSBieSBlcml4IHN1YnlhcmtvOiBodHRwczovL21vYmlsZS50d2l0dGVyLmNvbS9lcml4X2Fya28gLS0+CjxzdmcgZmlsbD0iIzAwMDAwMCIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTE1LjAwMiw5bC0yLjAwMywwYy0wLjU1MiwwIC0xLDAuNDQ4IC0xLDFjLTAsMC41NTIgMC40NDgsMSAxLDFsMS45OTYsMGwtMC4wMDYsMS45OTdjLTAuMDAyLDAuNTUyIDAuNDQ1LDEuMDAxIDAuOTk3LDEuMDAzYzAuNTUyLDAuMDAyIDEuMDAxLC0wLjQ0NSAxLjAwMywtMC45OTdsMC4wMDYsLTIuMDAzbDIuMDA0LDBjMC41NTIsMCAxLC0wLjQ0OCAxLC0xYy0wLC0wLjU1MiAtMC40NDgsLTEgLTEsLTFsLTEuOTk3LDBsMC4wMDYsLTEuOTk3YzAuMDAyLC0wLjU1MiAtMC40NDUsLTEuMDAxIC0wLjk5NywtMS4wMDNjLTAuNTUxLC0wLjAwMiAtMS4wMDEsMC40NDUgLTEuMDAzLDAuOTk3bC0wLjAwNiwyLjAwM1oiLz48cGF0aCBkPSJNNS45OTIsMjNsMCwyYzAsMC41NTIgMC40NDgsMSAxLDFjMC41NTIsMCAxLC0wLjQ0OCAxLC0xbDAsLTJsMTYsMGwwLDJjMCwwLjU1MiAwLjQ0OCwxIDEsMWMwLjU1MiwwIDEsLTAuNDQ4IDEsLTFsMCwtMmwxLjAwOCwtMGMxLjY1NywtMCAzLC0xLjM0MyAzLC0zbDAsLTZjMCwtMC41NTIgLTAuNDQ4LC0xIC0xLC0xYy0wLjU1MiwtMCAtMSwwLjQ0OCAtMSwxbDAsM2wtMTcsLTBsMCwtMS4wMTljMCwtMC43OTUgLTAuMzE2LC0xLjU1OCAtMC44NzksLTIuMTIxYy0wLjU2MiwtMC41NjIgLTEuMzI1LC0wLjg3OSAtMi4xMjEsLTAuODc5bC00LDBsMCwtMS40ODFjLTAsLTAuNTUyIC0wLjQ0OCwtMSAtMSwtMWMtMC41NTIsMCAtMSwwLjQ0OCAtMSwxbDAsOC41Yy0wLDAuNzk2IDAuMzE2LDEuNTU5IDAuODc5LDIuMTIxYzAuNTYyLDAuNTYzIDEuMzI1LDAuODc5IDIuMTIxLDAuODc5bDAuOTkyLDBabTIyLjAwOCwtNGwtMjQsLTBsLTAsMWMtMCwwLjI2NSAwLjEwNSwwLjUyIDAuMjkzLDAuNzA3YzAuMTg3LDAuMTg4IDAuNDQyLDAuMjkzIDAuNzA3LDAuMjkzYy0wLDAgMjIsLTAgMjIsLTBjMC41NTIsLTAgMSwtMC40NDggMSwtMWwwLC0xWm0tMjQsLTQuMDE5bC0wLDIuMDE5bDUsLTBsMCwtMS4wMTljMCwtMC4yNjUgLTAuMTA1LC0wLjUxOSAtMC4yOTMsLTAuNzA3Yy0wLjE4NywtMC4xODcgLTAuNDQyLC0wLjI5MyAtMC43MDcsLTAuMjkzbC00LDBaIi8+PC9zdmc+" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 md:col-span-7">
          <ChartOne />
        </div>
        <div className="col-span-12 md:col-span-5">
          <ChartThree />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <TableOne setImage={setDisplayImage}/>
        </div>
        {/* <ChatCard /> */}
        {displayImage !== "" && <div className="flex-row pl-5 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <img src={`${displayImage}`} className="h-180"/>
          <button className="px-2 py-2 bg-green-200 mx-auto">Correct</button>
        </div>}
        
        
      </div>
    </>
  );
};

export default ECommerce;