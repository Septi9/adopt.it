#FROM openjdk:17
#COPY ./Back-end/target/backend-1.0-SNAPSHOT.jar app.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "/app.jar"]


FROM openjdk:17 AS build  
COPY src ./Back-end/src
COPY ./Back-end/pom.xml pom.xml
RUN mvn -f /Back-end/pom.xml clean package

FROM gcr.io/distroless/java  
COPY --from=build ./Back-end/target/backend-1.0-SNAPSHOT.jar app.jar 
EXPOSE 8080  
ENTRYPOINT ["java","-jar","/app.jar"]  

