import styles from './Sidebar.module.css'

import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Siderbar(){
    return(
        <aside className={styles.sidebar}>
            <img className ={styles.profileimg} src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />

            <div className={styles.profile}>
                <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAD8QAAEDAgMEBwQHBwUBAAAAAAEAAgMEEQUSIRMxQVEGIjJhcYGxFKHB0SNSYnKRkvA0QkNzgqLhBxYzY5MV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAICAgMBAQAAAAAAAAAAAQIRITESQQNCUTIT/9oADAMBAAIRAxEAPwDx3KlASoCALJUIQAiyFYYPhkmJTZQcsTe2/l3DvQcm0FDQ1FdLs6dl7dpx3N8StBS9F4gAamZ7zyZ1Qr6lpIqWFsNOwNYOAU4bcaLO5VrMJFMOj2HD+C49+c/NRy9GqF4+j2sZ+y6/qr8RPO5rj5IMThva4eSW6rxjEYh0eqqVrpIT7QwanKOsB4cfJUy9OLSsz0kwYFpraVlnDWVg3EfWHxVTL9Rlh+MuhLZFlbIiEtkZUAiEuVKgG2QhCAEJQEoCAGMc9wYxpc5xs0DiV6lgnR00VFFDIQwgXfbUl3FYXojS+09IqFrhdrXl5H3QT6gL16ymrx4ckeH0zB2A483LobGxvZa0eATrJUlbJZFu5KhAc9TSRzsIIAdwcFQzQljnRyN1GhC01lX4tT5o9s0at0d4JU5Xk+M0QocQkhYLM7TPun5blw2K1PTOAD2acDnGfX4FZlVOmeU1TQOaE+yLKiNskT7ISJHZLlT7IsmDcqUCycAlsgND/p+zP0jb9mB7vQfFemvexnbcG/eNl5v/AKegf7gIdxpnjXxavRogxrM8MJDLXzNbYW562U1cSNc14u0gjuKHAltgbHmkLntcBJE5gd2SbW58CnpGi2TydZn+QaPgl2XN7/zJ8DNsXh0pa4HsNte3NSGmijZmnkcBe19oR4brI0W0YFhbXzSPaHsLTudokj0B7VieqHbwE8oNg+ldBPUQR09NBJNM2a+RjbmwB18Fi5InxSPjlY5j2HK5rhYg+C9bxuR0EWWls2om1Lr65W8PxIHmVkum9IwxUOINbZ0jTFJ3kbvdf3IlGU3yx9kWU1kllSEdihSaIQEZCLJxalATBlktk9FkBedCJBF0jphfth7P7SfgvUIzJE3LFI3KNzXtvYct4Xj2ETikxOkqCbCOVrnHuvr7rr2MKb2qco5Gk5nyOLn5SATwHcEQm8UZPFoT3jqm3JR05BhZY30ASUe6Nr7Zmh1t1xeyAxua+UX521T0IBLIITmtc7sglNcQxwa/QuNhfiglRjrWtNPLeznP2ZvutZx+CyXTOqDo6Kjab7MGVwvuJ3fFarpNNSw0rJqqRwEZuIxbrk8F5rV1L6yqlqZTd8jr+A5Ik5PK8ac5QnEIsrZGoTrIQDSElk/KiyDMslS2RZAIRcEcxZevYLV+24TSVN9ZIgXeNtfevI7L2LozhcdDgdNFd7i5gec/7pdqQOWqWtnLp0cNUzPG1xaC3Mdco3nyTqmIirgiJOzeTexsXWFwPX8F0NY5jcsbGRt+q259wCWh5OcOJ/hy/wDm75JNoz945fvC3quqVr9m4OLHC2rQw6+9cOMVMtPBkGSQya22d7AcSL662HmiwS28Oqlk+kcNxGhFlQ9OMTfQwMkhflk1yWOt93xJ8lZwvbG2RxDY2NtfL2Qbda3ddYXpA6XHDLVwMc9rZGx0zB++L2J95S36OT2z1ZWVFdLtKqZ8rhuzHQeAUCkmikhldFKxzJGmzmuFiExUkiAE6yEAWSJyRABTSE5B1QDUJSgCyARegdH+nMOzhpsTYYi1uUzg3abcxvCwF0qCewRYjR4q1z6SZkrGOsS3eCPeE/IOJf8And815LQV1Th1S2opJTG8b+IcORHELa4R0vFbIIJqKQSZbl8RBaB5kW96XKtyRpcg5u/MfmuKVsc1ReQnYAX6zz1sp8d1z/aOanZLLUZxE0xBpsXSAE3twAKo6+Ob2vZSOLGRxta0N0zgcb8PDfpvUVrjC4rVe3tdRwEtgHVeWm2nL9blA5jYoLRgNDB1QNwtuT2Na1oa0ANG4ALrw2m28+0k1jiPHi7/AB62TnNGVmOKu6R4Y/GHOmjbs6iGHOGkWLm78ru/0WHFiLjUHUFeq0Ldr7RM4X2jiB4LNY5gNHJT08lA0QVBja4tb2HC3LgfBbWOPHPU5ZBCfNDLA8snjdG8alrh+tO9MUNthCVCAQahCXgkKARIlQgEsnMa57mta0uc42DQLknkp6GiqK+oEFMzM+1zfQNHEk8At10SwmCiZJNYPnPV2pGo5gck5NoyymKhpui0kVMKnE3GPXSBp1/qPDwCuX0jKGjjEbGxve0uyhtrfVH64kqzxx3VjZzv+veuWWAg0hNdsiWh4EzS+5DgbA3BVdRlznlp005pZnhjXSwVFrh7iWuceOh3+Fl0VNLLWU5E7WMmjcdm9h0d8geIXTCJi0e0Pjk4hzW291yptfNYuzrplXucAGMbaZzsjWu4O7/BXb2NocNyN3MZbvJO8/jqmy0LBisdWBo8ZXDk4bj58fAJmK7WSempo7APJJcRfceXmtMIw+bK2por0uGg8Qy/mVT4Ww1b4Wv3MADv6dLe5W+IRA0Mm1e9wA0aDYe5RYHCI4HPAAzGw8ArYWc6GM4LSYtAGTtyyMH0crB1mfMdy88xPC56CR97SwtNhKwaW7xw/Wq9IxWfZU+Vps5+nkocKpAGbeVty4WaDwCWleVl1HmFkL0x3RzB3OLjh8Vybm1x8UqWm3nj+PMbpEiVSoqTfwQu/AI9rjVHcXYyVr3+FwPUhMW6jc4HhLcIwd4c0e0yMzzHvt2fAfPmu3BhakJ5uKkrZOrKz/rJTcIFqFve4q505/s4sadeoa36rPiuqtpIKmigbUx52MLXGwuRp3eS4cWN613gFeNHUaO5Fm5osLrLbO4XVuo6vZyz54ZTdjT2ouTXfaFvXktKDos5DSQ1lTI2cGwBcHDeCDoQu/C61wApawZJmgWHMHdbuWeWOnT8fyec5Wb2h7C124+5VdEJ5MRl9rIMkIs0DQAHcQO+34i3BWt1BVQGVn0byyQdlwv+B7kpdHnj5RBjDi2j8XhTULMlJE37N1TfS1FSKKRzo3AONiSbEbvEEXV3TvBjALS1zNHNPD/HetHNrnlW1YNVigiGrWWB+KtXOjiYXOIawcTuCq8JcHSVlVI6wDstzwsLn1H4LskBMD5pBZ+Q5W/V09UynE2iOLUgPaf+UpVR3KE0f6VgwhCFk7IUblfdDwDV1FxuY31SoTnac+mzrf2iX+QVLhP7CzxKVC09MPsrcR/bneSvv3UIQnHuqPD/APnqP5TvguKue44hGC4kXcLX4a/IIQpz6afB/UX+GOLqNhcST3rsQhY+nXl2qKprf/vUr7DMGuF7a2y7l2VGlS22l4X377Wt6lIha49Of5e1Zg5vROvxrDf9eSt6z9ml+6UIVe2XpmzvSIQmxf/Z"/>
                <strong>Lucas Ribeiro</strong>
                <span>React Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine  size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}