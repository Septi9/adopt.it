#FROM openjdk:17
#COPY ./Back-end/target/backend-1.0-SNAPSHOT.jar app.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "/app.jar"]
#
# Build stage
#
FROM maven:3.8.4-jdk-11 AS build
COPY ./Back-end/src ./Back-end/src
COPY ./Back-end/pom.xml ./Back-end
RUN mvn clean package -f ./Back-end/pom.xml

#
# Package stage
#
FROM openjdk:17
COPY --from=build ./Back-end/target/backend-1.0-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]

