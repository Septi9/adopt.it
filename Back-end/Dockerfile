FROM openjdk:17
ARG JAR_FILE=./Back-end/target/backend-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} /${JAR_FILE}
ENTRYPOINT ["java", "-jar", "/${JAR_FILE}"]

