#
# Build stage
#
FROM maven:3.8.4-jdk-11 AS build
COPY ./src ./src
COPY ./pom.xml ./
RUN mvn clean package -f ./pom.xml

#
# Package stage
#
FROM openjdk:17
COPY --from=build ./target/backend-1.0-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]



