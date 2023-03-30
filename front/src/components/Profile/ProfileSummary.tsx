import classes from "./ProfileSummary.module.css";

export default function ProfileSummary() {
  return (
    <>
      <div className={classes.profile_summary_container}>
        <div className={classes.who_am_i}>
          <h1>Who Am I?</h1>
          <span>개발을 사랑하는 풀스택 개발자</span>
          <span>사람과 디자인을 담는 웹앱 만들기</span>
        </div>
        <div className={classes.career}>
          <h1>Career</h1>
          <span>구글러(-Now)</span>
          <span>메이스북(-2019)</span>
          <span>삼순준자(-2015)</span>
        </div>
        <div className={classes.skills}>
          <h1>Skills</h1>
          <span>React, Node, Vue</span>
          <span>Git, clean code</span>
          <span>Vscode, IntelliJ, MYSQL</span>
        </div>
      </div>
    </>
  );
}
