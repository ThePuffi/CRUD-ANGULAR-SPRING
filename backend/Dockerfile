#
#Build
#
FROM gradle:7.5.1-jdk11-alpine AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle clean
RUN gradle build --no-daemon -x test

#
#Package
#
FROM openjdk:11-jre-slim

EXPOSE 8080

RUN mkdir /app

COPY --from=build home/gradle/src/build/libs/crudangularspring-backend-0.0.1-SNAPSHOT.jar /app/spring-boot-application.jar

ENTRYPOINT ["java","-jar","/app/spring-boot-application.jar"]
